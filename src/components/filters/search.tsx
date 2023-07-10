import React, { useMemo } from "react";
import SelectFilter, { Options } from "../remoteSelect/SelectFilter";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import dayjs from "dayjs";
import {
  ChangeFilterActive,
  ChangeFilterConnected,
} from "../../redux/fetures/device/diviceSlice";
import {
  ChangeFilterDV,
  ChangeValueFilterStatus,
  ChangeValueFilterList,
  ChangeValueFilterpowerSupply,
  ChangeFilterTimeReport,
  ChangeValueTime,
  ChangeValueTimeReport,
} from "../../redux/fetures/giveNumber/giveNumberSlice";
import {
  SEARCH_DEVICES,
  SEARCH_SERVERS,
  SEARCH_GIVE_NUMBER,
  SEARCH_REPORTS,
  ALL,
} from "../../util/configText";
import { Row, Col, DatePicker } from "antd";
import {
  dataService,
  opTionsStatus,
  powerSupply,
} from "../../fecthData/dataoptions";

const { RangePicker } = DatePicker;
const newDataService: Options[] = [
  {
    value: ALL,
    label: "Tất Cả",
  },
  ...dataService,
];
const OptionsStatus: Options[] = [
  {
    value: ALL,
    label: "Tất Cả",
  },
  ...opTionsStatus,
];
const OptionsSupple: Options[] = [
  {
    value: ALL,
    label: "Tất Cả",
  },
  ...powerSupply,
];
type Props = { type: string };

const Searchs: React.FC<Props> = ({ type }) => {
  const dataActive = useMemo(
    () => [
      { label: "Tất Cả", value: "All" },
      { label: "Hoạt động", value: true },
      { label: "Ngưng Hoạt động", value: false },
    ],
    []
  );

  const dataConnect = useMemo(
    () => [
      { label: "Tất Cả", value: "All" },
      { label: "Kết nối", value: true },
      { label: "Mất kết nối", value: false },
    ],
    []
  );
  const dispath = useAppDispatch();
  const { ValueFilterActive, ValueFilterConnected } = useAppSelector(
    (state) => state.deviceReducer
  );
  const {
    ValueFilterDV,
    ValueFilterStatus,
    ValueFilterpowerSupply,
    ValueTime,
  } = useAppSelector((state) => state.giveNumberReducer);
  return (
    <>
      <Row gutter={20}>
        <Col span={type === SEARCH_SERVERS || type === SEARCH_REPORTS ? 6 : 4}>
          {type === SEARCH_DEVICES ? (
            <SelectFilter
              label="Trạng thái hoạt động"
              innitTialValue={ValueFilterActive}
              options={dataActive}
              onChange={(e: any) => {
                dispath(ChangeFilterActive(e));
              }}
            />
          ) : type === SEARCH_SERVERS ? (
            <SelectFilter
              label="Trạng thái hoạt động"
              innitTialValue={ValueFilterActive}
              options={dataActive}
              onChange={(e: any) => {
                dispath(ChangeFilterActive(e));
              }}
            />
          ) : type === SEARCH_GIVE_NUMBER ? (
            <SelectFilter
              label="Tên Dịch Vụ"
              innitTialValue={ValueFilterDV}
              options={newDataService}
              onChange={(value: any) => {
                dispath(ChangeFilterDV(value));
                dispath(
                  ChangeValueFilterList({
                    valueService: value,
                    valueStatus: ValueFilterStatus,
                    valuePowerSupply: ValueFilterpowerSupply,
                    valueTime: ValueTime,
                  })
                );
              }}
            />
          ) : type === SEARCH_REPORTS ? (
            <div>
              <div>Chọn Thời Gian</div>
              <RangePicker
                onChange={(value: any) => {
                  const valueEdit =
                    value?.[0] || value?.[1]
                      ? [
                          dayjs(value[0]).toISOString(),
                          dayjs(value[1]).toISOString(),
                        ]
                      : [];

                  dispath(ChangeValueTimeReport(valueEdit));
                  dispath(ChangeFilterTimeReport(valueEdit));
                }}
              />
            </div>
          ) : (
            "NULL"
          )}
        </Col>
        <Col span={type === SEARCH_SERVERS ? 6 : 4}>
          {type === SEARCH_DEVICES ? (
            <SelectFilter
              label="Trạng thái kết nối"
              innitTialValue={ValueFilterConnected}
              options={dataConnect}
              onChange={(e: any) => {
                dispath(ChangeFilterConnected(e));
              }}
            />
          ) : type === SEARCH_SERVERS ? (
            <SelectFilter
              label="Trạng thái kết nối"
              innitTialValue={ValueFilterConnected}
              options={dataConnect}
              onChange={(e: any) => {
                dispath(ChangeFilterConnected(e));
              }}
            />
          ) : type === SEARCH_GIVE_NUMBER ? (
            <SelectFilter
              label="Tình Trạng"
              innitTialValue={ValueFilterStatus}
              options={OptionsStatus}
              onChange={(value: any) => {
                dispath(ChangeValueFilterStatus(value));
                dispath(
                  ChangeValueFilterList({
                    valueStatus: value,
                    valueService: ValueFilterDV,
                    valuePowerSupply: ValueFilterpowerSupply,
                    valueTime: ValueTime,
                  })
                );
              }}
            />
          ) : null}
        </Col>
        <Col span={4}>
          {type === SEARCH_GIVE_NUMBER ? (
            <SelectFilter
              label="Nguồn Cấp"
              innitTialValue={ValueFilterpowerSupply}
              options={OptionsSupple}
              onChange={(value: any) => {
                dispath(ChangeValueFilterpowerSupply(value));
                dispath(
                  ChangeValueFilterList({
                    valueService: ValueFilterDV,
                    valueStatus: ValueFilterStatus,
                    valuePowerSupply: value,
                    valueTime: ValueTime,
                  })
                );
              }}
            />
          ) : null}
        </Col>
        <Col span={6}>
          {type === SEARCH_GIVE_NUMBER ? (
            <div>
              <div>Chọn Thời Gian</div>
              <RangePicker
                // defaultValue={ValueTime.map((value) => dayjs(value))}
                onChange={(value: any) => {
                  const valueEdit =
                    value?.[0] || value?.[1]
                      ? [
                          dayjs(value[0]).toISOString(),
                          dayjs(value[1]).toISOString(),
                        ]
                      : [];

                  dispath(ChangeValueTime(valueEdit));
                  dispath(
                    ChangeValueFilterList({
                      valueService: ValueFilterDV,
                      valueStatus: ValueFilterStatus,
                      valuePowerSupply: ValueFilterpowerSupply,
                      valueTime: valueEdit,
                    })
                  );
                }}
              />
            </div>
          ) : null}
        </Col>
      </Row>
    </>
  );
};
export default Searchs;
