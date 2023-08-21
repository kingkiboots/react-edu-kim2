1. App.js : useState, useEffect, axios, Link 태그
2. App2.jsx : <ButtonComponent />, <TextFieldComponent />, <TableComponent /> 공통 레이아웃 재사용, useNavigate()
3. App3.jsx : 컴포넌트 쪼개기
4. SampleForMemoizationLayout.jsx : useCallback, useMemo

Navbar.jsx : 네비게이션바. <Outlet /> 태그를 이용하여 Sidebar는 렌더링 되지 않고 Router <Route path="/" exact element={<Navbar />}> 내에 있는 Route들만 바뀜


# axios 가이드

axios의 기본적인 사용법만 가이드하며, 자세한건 [사이트](#https://axios-http.com/) 참고.

```javascript
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```

GET(HEAD, DELETE, OPTIONS 포함)의 경우 Qeury Params 처리는 url에 직접 붙이거나 config의 params 항목으로 전달이 가능함.

```jsx
// GET
axios
  .get('/user', { params: { ID: 12345 } })
  .then((response) => {
    // 성공 핸들링
    console.log(response);
  })
  .catch((error) => {
    // 에러 핸들링
    console.log(error);
  })
  .finally(() => {
    // 항상 실행되는 영역
  });
```

POST(PUT, PATCH 포함)의 경우 Payload Body 처리는 2번째 파라미터에 오브젝트로 전달이 가능함.

```jsx
// POST
axios
  .post('/user', { firstName: 'Fred', lastName: 'Flintstone' })
  .then((response) => {
    // 성공 핸들링
    console.log(response);
  })
  .catch((error) => {
    // 에러 핸들링
    console.log(error);
  })
  .finally(() => {
    // 항상 실행되는 영역
  });
```

기본적으로 axios는 비동기 처리이나 동기적으로 처리가 필요하다면 아래와 같이 별도 함수로 분리하고 async/await 처리로 가능함.

```jsx
const getUser = async () => {
  // 오류는 try/catch 로 감싸서 처리 가능함.
  try {
    // response 응답이 올 때까지 대기
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

API서버가 다수라 여러개의 별도 인스턴스가 필요한 경우 아래와 같이 create()를 호출하여 생성 및 사용이 가능함.

```jsx
const customAxios = axios.create({
  // 해당 인스턴스의 Default Config 설정 추가
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

customAxios.get(...);
```

config에서 설정 가능한 주요옵션.\
상세목록은 [공식가이드](#https://axios-http.com/docs/req_config) 참고\
(Typescript 형식은 InternalAxiosRequestConfig)

```jsx
{
  // 호출 URL이 상대경로인 경우 앞에 붙는 기본 도메인
  baseURL: 'https://some-domain.com/api/',
  // 요청 타임아웃 시간. 단위는 ms. 기본값은 0
  timeout: 1000,
  // 자격 증명을 사용하여 사이트 간 액세스 제어 요청을 해야 하는지 여부
  // 설정 시 Access-Control-Allow-Credentials 헤더가 추가된다.
  // 기본값은 false
  withCredentials: false,
  // 서버 응답값의 데이터 타입. 기본값은 'json'
  responseType: 'json',
  // 나머지는 API문서 참고
  ...
}
```

응답스키마 구조.\
(Typescript 형식은 AxiosResponse)

```jsx
{
  // `data`는 서버가 제공하는 응답입니다.
  data: {},

  // `status`는 HTTP 상태 코드입니다.
  status: 200,

  // `statusText`는 HTTP 상태 메시지입니다.
  statusText: 'OK',

  // `headers`는 HTTP 헤더입니다.
  // 모든 헤더 이름은 소문자이며, 괄호 표기법을 사용하여 접근할 수 있습니다.
  // 예시: `response.headers['content-type']`
  headers: {},

  // `config`는 요청을 위해 `Axios`가 제공하는 구성입니다.
  config: {},

  // `request`는 이번 응답으로 생성된 요청입니다.
  // 이것은 node.js에서 마지막 ClientRequest 인스턴스 입니다.
  // 브라우저에서는 XMLHttpRequest입니다.
  request: {}
}
```

오류처리 방식 예시.

```jsx
axios.get('/user/12345').catch((error) => {
  // 서버에서 2xx 외의 상태 코드로 응답했을경우.
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
  // 요청이 전송되었지만, 응답이 수신되지 않은경우
  else if (error.request) {
    console.log(error.request);
  }
  // 기타 오류
  else {
    console.log('Error', error.message);
  }
});
```

인터셉터를 추가하여 요청 및 응답 전에 전처리가 가능함.\
인스턴스별 개별 설정 가능.

```jsx
// 요청 인터셉터
axios.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axios.interceptors.response.use(
  (response) => {
    // 2xx 응답의 경우 응답이 전달되기 전에 작업 수행
    // .then()으로 이어짐
    return response;
  },
  (error) => {
    // 2xx 외의 응답의 경우 오류가 전달되기 전에 작업 수행
    // .catch()로 이어짐
    return Promise.reject(error);
  }
);
```
