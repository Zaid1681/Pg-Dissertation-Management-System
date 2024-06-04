import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  FolderAddFilled,
} from "@ant-design/icons";
import AddDissertations from "./AddDissertations";
// import AllDissertations from "./AllDissertations";
import GuideDashboard from "./GuideDashboard";
import GroupDissertation from "./GroupDissertations";
const { Header, Content, Sider } = Layout;

const GuideSidebar = () => {
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

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
              Add Dissertations
            </h1>
            <AddDissertations />
          </div>
        );
      case "all_dissertation":
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
              Guide Dissertations
            </h1>
            <AllDissertations />
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
            <GuideDashboard />
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
          <Menu.Item key="dashbaord" icon={<FolderAddFilled />}>
            <Link to="/guide">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="add_dissertation" icon={<PieChartOutlined />}>
            <Link to="/guide/viewdissertations">View Dissertations</Link>
          </Menu.Item>
          <Menu.Item key="all_dissertation" icon={<DesktopOutlined />}>
            <Link to="/guide/groupdissertations">Group Dissertations</Link>
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

export default GuideSidebar;
