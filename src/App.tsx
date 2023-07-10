import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./pages/auth/login";
import DashboardDay from "./pages/dashboard/DashboardDay";
import LayoutMain from "../src/components/layOut/LayoutMain";
import DeviceList from "./pages/Device/List";
import DeviceAdd from "./pages/Device/Add";
import DeviceEdit from "./pages/Device/Edit";
import DeviceDetail from "./pages/Device/Detail";
import ServiceList from "./pages/Service/List";
import ServiceAdd from "./pages/Service/Add";
import ServiceDetail from "./pages/Service/Detail";
import ServecieEdit from "./pages/Service/Edit";
import GiveNumberList from "./pages/GiveNumber/List";
import GiveNumberAdd from "./pages/GiveNumber/Add";
import GiveNumberDetail from "./pages/GiveNumber/Detail";
import ManagerRoleAdd from "./pages/ManagerRole/Add";
import ManagerRoleList from "./pages/ManagerRole/List";
import ManagerRoleEdit from "./pages/ManagerRole/Edit";
import ManagerAccountList from "./pages/ManagerAccount/List";
import ManagerAccountAdd from "./pages/ManagerAccount/Add";
import ManagerAccountEdit from "./pages/ManagerAccount/Edit";
import ReportList from "./pages/report/List";
import ActiveLogList from "./pages/ActiveLog/List";
import { ConfigProvider } from "antd";
import "./firebase/config/config";
import { useAppSelector } from "./redux/app/hook";
import { Router } from "./Customrouter";

function App() {
  const navigator = useNavigate();
  const { key, pathname } = useLocation();
  const { isLogin } = useAppSelector((state) => state.LoginReducer);

  useEffect(() => {
    if (!isLogin && pathname !== "/ForgotPass") {
      navigator("/Login");
    }
  }, [isLogin, key]);
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorPrimary: "#0E7490",
          },
          Layout: {
            colorBgBody: "#FFFFFF",
            colorPrimary: "#0E7490",
          },
          Tooltip: {
            colorBgTextHover: "#0E7490",
          },
        },
        token: {
          colorPrimary: "#ff9138",
          fontFamily: "Roboto",
        },
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Menu" element={<LayoutMain />}>
            <Route path="/Menu/DashboarDay" element={<DashboardDay />} />
            <Route
              path={Router.Device.List.pathName}
              element={<DeviceList />}
            />
            <Route path={Router.Device.Add.pathName} element={<DeviceAdd />} />
            <Route
              path={Router.Device.Edit.pathName}
              element={<DeviceEdit />}
            />
            <Route
              path={Router.Device.Detail.pathName}
              element={<DeviceDetail />}
            />
            <Route
              path={Router.Service.List.pathName}
              element={<ServiceList />}
            />
            <Route
              path={Router.Service.Add.pathName}
              element={<ServiceAdd />}
            />
            <Route
              path={Router.Service.Detail.pathName}
              element={<ServiceDetail />}
            />
            <Route
              path={Router.Service.Edit.pathName}
              element={<ServecieEdit />}
            />
            <Route
              path={Router.GiveNumber.List.pathName}
              element={<GiveNumberList />}
            />
            <Route
              path={Router.GiveNumber.Add.pathName}
              element={<GiveNumberAdd />}
            />
            <Route
              path={Router.GiveNumber.Detail.pathName}
              element={<GiveNumberDetail />}
            />
            <Route
              path={Router.ManagerRole.Add.pathName}
              element={<ManagerRoleAdd />}
            />
            <Route
              path={Router.ManagerRole.List.pathName}
              element={<ManagerRoleList />}
            />
            <Route
              path={Router.ManagerRole.Edit.pathName}
              element={<ManagerRoleEdit />}
            />
            <Route
              path={Router.ManagerAccount.List.pathName}
              element={<ManagerAccountList />}
            />
            <Route
              path={Router.ManagerAccount.Add.pathName}
              element={<ManagerAccountAdd />}
            />
            <Route
              path={Router.ManagerAccount.Edit.pathName}
              element={<ManagerAccountEdit />}
            />
            <Route
              path={Router.Report.List.pathName}
              element={<ReportList />}
            />
            <Route
              path={Router.ManagerActiveLog.List.pathName}
              element={<ActiveLogList />}
            />
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}
export default App;
