import React, { useEffect, useMemo } from "react";
import type { ColumnsType } from "antd/es/table";
import { Badge, Table } from "antd";
import { ServiceDetail } from "../../database/Service";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { fetchServiceDetail } from "../../redux/fetures/servicess/serviesDetailSlice";
// import {  } from "../../redux/fetures/servicess/servicesSlice";
import "../../css/action.scss";
import { useNavigate } from "react-router-dom";
import { STATUS_ABSENT, STATUS_DONE, STATUS_IN_PROGRESS } from "../../util/configText";
interface DataType extends ServiceDetail {}

type Props = {
  id: string;
};
const ListServices: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, ListAllServiceDetail } = useAppSelector(
    (state) => state.serviceDetailReducer
  );
  //   const OnNavigate = (record: Service, praram: string) => {
  //     navigate(`/Menu/Service/${praram}/${record.id}`, {
  //       state: {
  //         record,
  //       },
  //     });
  //   };

  useEffect(() => {
    dispatch(fetchServiceDetail());
  }, []);
  const Listdetail = useMemo(
    () =>
      ListAllServiceDetail.find((item) => item.id === id)?.ListDetail.map(
        (item, index) => ({ ...item, key: index + 1 })
      ),
    [ListAllServiceDetail.length]
  );

  // useEffect(() => {
  //   dispatch(());
  // }, [ValueFilterActive, ValueFilterConnected, loading]);
  //   const isFilter =
  //     `${ValueFilterActive}`.toLowerCase() !== "All".toLowerCase() ||
  //     `${ValueFilterConnected}`.toLowerCase() !== "All".toLowerCase();

  const columns: ColumnsType<DataType> = [
    {
      title: "Stt",
      dataIndex: "Stt",
      key: "key",
    },
    {
      title: "Trạng thái",
      dataIndex: "Status",
      key: "key",
      render: (status) => (
        <Badge
          color= {status === STATUS_DONE ? "green" : status === STATUS_IN_PROGRESS?  "blue" : "gray"}
          text={status === STATUS_DONE ? "Đã hoàn thành" : status === STATUS_IN_PROGRESS ? "đang thực hiện" :"vắng"}
        />
      ),
    },
  ];
  return (
    <Table
      className="box-table"
      columns={columns}
      dataSource={Listdetail}
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
