import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Table, Tooltip } from "antd";
import { GiveNumber } from "../../database/GiveNumber";
import { getActiveLog } from "../../service/activeLog";
import "../../css/action.scss";
import { ActiveLog } from "../../database/ActiveLog";
import dayjs from "dayjs";

interface DataType extends GiveNumber {}

const ListServices: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [List, setList] = useState<ActiveLog[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const ListActiveLog: ActiveLog[] = await getActiveLog();
        const cusTomList = ListActiveLog.map((activeLog) => ({
          ...activeLog,
          timeImpact: dayjs(activeLog.timeImpact).format("HH:mm:ss DD/MM/YYYY"),
        }));
        setList(cusTomList);
        setLoading(false);
      } catch (err: any) {
        alert("xảy ra lỗi " + err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "Tên Đăng Nhập",
      dataIndex: "userName",
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
      title: "Thời Gian Tác Động",
      dataIndex: "timeImpact",
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
      title: "Ip Thực Hiện",
      dataIndex: "ipImpact",
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
      title: "Thao Tác Thực Hiện",
      dataIndex: "operations",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      render: (operation) => (
        <Tooltip placement="topLeft" title={operation}>
          {operation}
        </Tooltip>
      ),
    },
  ];
  return (
    <Table
      className="box-table"
      columns={columns}
      dataSource={List}
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
