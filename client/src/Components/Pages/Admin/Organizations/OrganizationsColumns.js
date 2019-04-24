import React from "react";

import { Button } from "antd";

export default ({ category, deleteHandler, editHandler }) => {
  const basicInfo = [
    {
      title: category,
      dataIndex: "name",
      key: "name",
      render: text => <span style={{ fontWeight: "700" }}>{text}</span>
    }
  ];

  if (category !== "worksite") {
    basicInfo.push({
      title: "Website",
      dataIndex: "websiteURL",
      key: "websiteURL"
    });
  }

  if (category === "agency" || category === "payroll") {
    basicInfo.push(
      {
        title: "Email",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "Phone",
        dataIndex: "phoneNumber",
        key: "phoneNumber"
      }
    );
  }

  basicInfo.push({
    title: "Action",
    key: "action",
    width: "13rem",
    render: (text, record) => {
      return (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Button
              type="primary"
              ghost
              style={{
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem"
              }}

              // to be added in sprint 2
              // onClick={() => editHandler(record._id)}
            >
              Edit
            </Button>
            <Button
              ghost
              type={record.active ? "danger" : "primary"}
              onClick={() =>
                deleteHandler({ id: record._id, active: !record.active })
              }
              style={{
                color: record.active ? "red" : "",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem"
              }}
            >
              {record.active ? "Deactivate" : "Activate"}
            </Button>
          </div>
        </div>
      );
    }
  });
  return basicInfo;
};