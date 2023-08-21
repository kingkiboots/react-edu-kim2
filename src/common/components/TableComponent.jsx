import React from "react";

const TableComponent = ({ colDef, list }) => {
  // 일단 지금은 한 줄만
  return (
    <table style={{ border: "1px solid black" }}>
      <thead>
        <tr>
          {colDef.map((ele, idx) => {
            const keyVal = `${ele.labelName}${idx}`;
            return <th key={keyVal}>{ele.labelName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {list.map((ele, idx) => {
          const trKeyVal = `tablebody${idx}`;
          return (
            <tr key={trKeyVal}>
              {colDef.map((colEle, colIdx) => {
                const value = ele[colEle.name];
                const tdKeyval = `${trKeyVal}td${colIdx}`;
                return <td key={tdKeyval}>{value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
