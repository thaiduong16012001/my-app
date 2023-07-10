import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import { Badge, Table, Tooltip } from "antd";
import { GiveNumber, } from "../../database/GiveNumber";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { fetchgiveNumberAll,RevertTime } from "../../redux/fetures/giveNumber/giveNumberSlice";

import "../../css/action.scss";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import {
  WAI_TING,
  USED,
  KHAM_SAN_PHU_KHOA,
  KHAM_RANG_HAM_MAT,
  KHAM_TAI_MUI_HONG,
  ALL,
} from "../../util/configText";

interface DataType extends GiveNumber {}

const ListServices: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    ChangeData,
    loading,
    ListAllgiveNumber,
    FilterListgiveNumber,
    ValueFilterDV,
    ValueFilterpowerSupply,
    ValueFilterStatus,
    ValueTime,
  } = useAppSelector((state) => state.giveNumberReducer);
  const OnNavigate = (record: GiveNumber, praram: string) => {
    navigate(`/Menu/GiveNumber/${praram}/${record.id}`, {
      state: {
        record,
      },
    });
  };
  useEffect(() => {
    dispatch(RevertTime())
    dispatch(fetchgiveNumberAll());
  }, []);

  const isFilter =
    ValueFilterDV === ALL &&
    ValueFilterStatus === ALL &&
    ValueFilterpowerSupply === ALL &&
    ValueTime.length <= 0;
  const List = isFilter ? ListAllgiveNumber : FilterListgiveNumber;
  const newList = List.map((value) => ({
    ...value,
    grantTime: dayjs(value.grantTime).format("HH:mm DD/MM/YYYY"),
    HSD: dayjs(value.HSD).format("HH:mm DD/MM/YYYY"),
    nameService:
      value.nameService === KHAM_RANG_HAM_MAT
        ? "Khám Răng Hàm Mặt"
        : value.nameService === KHAM_SAN_PHU_KHOA
        ? "Khám Sản Phụ Khoa"
        : value.nameService === KHAM_TAI_MUI_HONG
        ? "Khám tai mũi họng"
        : "Khám Tim Mạch",
  }));
  const columns: ColumnsType<DataType> = [
    {
      title: "Stt",
      dataIndex: "stt",
      width: "5vw",
      align: "center",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Tên Khách Hàng",
      dataIndex: "nameUser",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Tên Dịch Vụ",
      dataIndex: "nameService",
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
      title: "Thới Gian Cấp",
      dataIndex: "grantTime",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (time) => (
        <Tooltip placement="topLeft" title={time}>
          {time}
        </Tooltip>
      ),
    },
    {
      title: "Hạn Sử dụng",
      dataIndex: "HSD",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (time) => (
        <Tooltip placement="topLeft" title={time}>
          {time}
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
          color={
            status === WAI_TING ? "blue" : status === USED ? "gray" : "red"
          }
          text={
            status === WAI_TING
              ? "Đang Chờ"
              : status === USED
              ? "Đã Sử Dụng"
              : "Bỏ Qua"
          }
        />
      ),
    },
    {
      title: "Nguồn Cấp",
      key: "id",
      dataIndex: "powerSupply",
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
        <div onClick={() => OnNavigate(record, "Detail")} className="CssAcion">
          Chi Tiết
        </div>
      ),
    },
  ];
  return (
    <Table
      className="box-table"
      columns={columns}
      dataSource={newList}
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
