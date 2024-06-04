import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  FolderAddFilled,
} from "@ant-design/icons";
import AddDissertations from "./AddDissertations";
import StdAllDissertation from "./StdAllDissertation";
import StudentDashboard from "./StudentDashboard";
import axios from "axios";
const { Header, Content, Sider } = Layout;

const StudentSidebar = () => {
  const [data, setData] = useState([]);

  const { user } = useSelector((state) => state.auth);
  console.log("log data", user);

  const location = useLocation();
  const [current, setCurrent] = useState(
    location.pathname === "/" || location.pathname === ""
      ? "/contact"
      : location.pathname
  );

  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    if (location && current === location.pathname) {
      setCurrent(location.pathname);
    }
  }, [location, current]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/idea/getIdea/${user._id}`);
      // console.log(res.data);
      setData(res.data);
      // console.log("----->", res.data);
    };
    // fetchVideo();
    fetchData();
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log("-->", data);

  const renderComponent = () => {
    switch (current) {
      case "add_dissertation":
        return (
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <h1 className="text-center text-extra-large font-bold mt-10">
              Add Synopsis  
            </h1>
            <AddDissertations />
          </div>
        );
      case "all_dissertation":
        return (
          <div
            className="h-full mt-5"
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <h1 className="text-large font-bold border w-80 py-3 px-1 rounded-xl   ">
              View your Dissertations
            </h1>
            <div className="flex gap-5">
              {" "}
              {data.map((value, index) => (
                <StdAllDissertation datavalue={value} key={index} />
              ))}
            </div>
          </div>
        );
      default:
      case "dashboard":
        return (
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <h1 className='text-center text-extra-large font-bold mt-10'>Guide Dissertations</h1> */}
            <StudentDashboard />
          </div>
        );
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={handleMenuClick}
          theme="dark"
          mode="inline"
          selectedKeys={[current]}
        >
          <Menu.Item key="dashboard" icon={<FolderAddFilled />}>
            <Link to="/student">Student Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="add_dissertation" icon={<PieChartOutlined />}>
            <Link to="/student/add">Add Dissertations</Link>
          </Menu.Item>
          <Menu.Item key="all_dissertation" icon={<DesktopOutlined />}>
            <Link to="/student/all"> View all Dissertations</Link>
          </Menu.Item>
          {/* Add more menu items as needed */}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>{renderComponent()}</Content>
      </Layout>
    </Layout>
  );
};

export default StudentSidebar;
