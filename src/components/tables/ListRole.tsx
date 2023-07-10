import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Table, Tooltip } from "antd";
import { Role } from "../../database/Role";

import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { fecthRoles } from "../../redux/fetures/managerRoles/managerRoleSlice";

// import {  } from "../../redux/fetures/servicess/servicesSlice";
import "../../css/action.scss";
import { useNavigate } from "react-router-dom";
interface DataType extends Role {}

const ListServices: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, ListAllRoles } = useAppSelector(
    (state) => state.managerRoleReducer
  );
  const OnNavigate = (record: Role, praram: string) => {
    navigate(`/Menu/ManagerRole/${praram}/${record.id}`, {
      state: {
        record,
      },
    });
  };

  console.log(ListAllRoles);
  useEffect(() => {
    dispatch(fecthRoles());
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (id) => (
        <Tooltip placement="topLeft" title={id}>
          {id}
        </Tooltip>
      ),
    },
    {
      title: "Số Người Sử Dụng",
      dataIndex: "numberUsed",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Action",
      key: "id",
      width: "7vw",
      align: "center",
      render: (record: any) => (
        <div onClick={() => OnNavigate(record, "Edit")} className="CssAcion">
          Cập nhật
        </div>
      ),
    },
  ];
  return (
    <Table
      className="box-table"
      columns={columns}
      dataSource={ListAllRoles}
      loading={loading}
      scroll={{
        y: 300,
        scrollToFirstRowOnChange: true,
      }}
      pagination={{
        defaultPageSize: 5,
      }}
    />
  );
};
export default ListServices;
