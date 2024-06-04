import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  FolderAddFilled,
} from "@ant-design/icons";
// import AddDissertations from './AddDissertations';
// import AllDissertations from './AllDissertations';
import ViewDissertations from "./AdminSection/ViewDissertations";
import ViewGuides from "./AdminSection/ViewGuides";
import AdminDashboard from "./AdminSection/AdminDashboard";

const { Header, Content, Sider } = Layout;

const AdminSidebar = () => {
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
            {/* <h1 className='text-center text-extra-large font-bold mt-10'>View All Students</h1> */}
            <ViewDissertations />
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
            {/* <h1 className='text-center text-extra-large font-bold mt-10'>Student Dissertations</h1> */}
            <ViewGuides />
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
            {/* <h1 className='text-center text-extra-large font-bold mt-10'>Admin Dashboard</h1> */}
            {/* <div className='text-center text-large font mt-10'>Admin section</div> */}
            <AdminDashboard />
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
            <Link to="/admin">Admin Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="add_dissertation" icon={<PieChartOutlined />}>
            <Link to="/admin/viewsynopsis">View Synopsis</Link>
          </Menu.Item>
          <Menu.Item key="all_dissertation" icon={<DesktopOutlined />}>
            <Link to="/admin/viewguides">View All Guides</Link>
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

export default AdminSidebar;
