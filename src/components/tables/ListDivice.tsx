import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import { Badge, Table, Tooltip } from "antd";
import { Divice } from "../../database/Divice";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { fetchDeviceAll } from "../../redux/fetures/device/diviceSlice";
import { FilterData } from "../../redux/fetures/device/diviceSlice";
import "../../css/action.scss";
import { useNavigate } from "react-router-dom";
interface DataType extends Divice {}

const ListDivice: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    ChangeData,
    loading,
    ListAllDevices,
    FilterListDevices,
    ValueFilterActive,
    ValueFilterConnected,
  } = useAppSelector((state) => state.deviceReducer);
  const OnNavigate = (record: Divice, praram: string) => {
    navigate(`/Menu/Device/${praram}/${record.id}`, {
      state: {
        record,
      },
    });
  };
  useEffect(() => {
    dispatch(fetchDeviceAll());
  }, [ChangeData]);
  useEffect(() => {
    dispatch(FilterData());
  }, [ValueFilterActive, ValueFilterConnected, loading]);
  const isFilter =
    `${ValueFilterActive}`.toLowerCase() !== "All".toLowerCase() ||
    `${ValueFilterConnected}`.toLowerCase() !== "All".toLowerCase();

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã thiết bị",
      dataIndex: "id",
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
      title: "Tên Thiết bị",
      dataIndex: "name",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement="topLeft" title={name}>
          {name}
        </Tooltip>
      ),
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "addressIP",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusActive",
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
      title: "Trạng thái kết nối",
      dataIndex: "statusConnect",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (status) => (
        <Badge
          status={status ? "success" : "error"}
          text={status ? "Kết nối" : "Mất kết nối"}
        />
      ),
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "useSrever",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement="topLeft" title={name}>
          {name}
        </Tooltip>
      ),
    },
    {
      title: "Action",
      key: "id",
      width: "7vw",
      align: "center",
      render: (record: any) => (
        <div onClick={() => OnNavigate(record, "Detail")} className="CssAcion">
          Chi Tiết
        </div>
      ),
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
      dataSource={isFilter ? FilterListDevices : ListAllDevices}
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
export default ListDivice;
