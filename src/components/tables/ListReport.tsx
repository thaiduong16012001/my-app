import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import { Badge, Table, Tooltip } from "antd";
import { GiveNumber } from "../../database/GiveNumber";
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
  const dispatch = useAppDispatch();
  const { loading, ListAllgiveNumber, FilterListReport, ValueTimeReport, } =
    useAppSelector((state) => state.giveNumberReducer);

  useEffect(() => {
    dispatch(RevertTime())
    dispatch(fetchgiveNumberAll());
  }, []);

  const isFilter = ValueTimeReport.length <= 0;
  const List = isFilter ? ListAllgiveNumber : FilterListReport;
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
      sorter: (a, b) => Number(a.stt) - Number(b.stt),
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
      sorter: (a, b) => `${a?.nameService}`.localeCompare(`${b?.nameService}`),
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
      sorter: (a, b) => Number(dayjs(a.grantTime)) - Number(dayjs(b.grantTime)),
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
      sorter: (a, b) => Number(a.status) - Number(b.status),
    },
    {
      title: "Nguồn Cấp",
      key: "id",
      dataIndex: "powerSupply",
      ellipsis: {
        showTitle: false,
      },
      sorter: (a, b) => `${a?.powerSupply}`.localeCompare(`${b?.powerSupply}`),
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
