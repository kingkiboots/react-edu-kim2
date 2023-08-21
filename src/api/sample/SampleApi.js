import { sampleApiClient } from "../../common/net/ApiClient";

export const selectPosts = async (data) => {
  console.log("### selectPosts req =>", data);
  return sampleApiClient.get(`/posts/${data.postId ?? ""}`).then((res) => {
    console.log("@@@ selectPosts res", res);
    return res.data;
  });
};

export const selectComments = async (data) => {
  console.log("### selectComments req =>", data);
  return sampleApiClient.get("/comments", { params: data }).then((res) => {
    console.log("@@@ selectComments res", res);
    return res.data;
  });
};

export const insertPost = async (data) => {
  console.log("### insertPost req =>", data);
  return sampleApiClient
    .post("/post", {
      title: data.title,
      body: data.body,
      userId: data.userId,
    })
    .then((res) => {
      console.log("@@@ insertPost res", res);
      return res.data;
    });
};
