import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import { Badge, Table, Tooltip } from "antd";
import { User } from "../../database/User";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { fetchUserAll } from "../../redux/fetures/user/userSlice";

import "../../css/action.scss";
import { useNavigate } from "react-router-dom";
interface DataType extends User {}

const ListUser: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, ListAllUser } = useAppSelector((state) => state.userReducer);
  const OnNavigate = (record: User, praram: string) => {
    navigate(`/Menu/ManagerAccount/${praram}/${record.id}`, {
      state: {
        record,
      },
    });
  };
  useEffect(() => {
    dispatch(fetchUserAll());
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "Tên Đăng Nhập",
      dataIndex: "username",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (username) => (
        <Tooltip placement="topLeft" title={username}>
          {username}
        </Tooltip>
      ),
    },
    {
      title: "Họ Và Tên",
      dataIndex: "fullname",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (fullname) => (
        <Tooltip placement="topLeft" title={fullname}>
          {fullname}
        </Tooltip>
      ),
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phoneNumber",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "id",
        ellipsis: {
          showTitle: false,
        },
        render: (email) => (
          <Tooltip placement="topLeft" title={email}>
            {email}
          </Tooltip>
        ),
      },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "status",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (status) => (
        <Badge
          status={status ? "success" : "error"}
          text={status ? "Hoạt động" : "Ngưng Hoạt động"}
        />
      ),
    },
    {
      title: "Vai Trò",
      dataIndex: "role",
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
      dataSource={ListAllUser}
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
export default ListUser;
