"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  ConfigProvider,
  Switch,
  Breadcrumb,
  Layout,
  Menu,
  theme,
} from "antd";
import { lightTheme, darkTheme } from "./themeConfig";
import {
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `dashboard ${key}`,
  };
});

const HomePage = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [collapsed, setCollapsed] = useState(false);

  const onChange = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <div className="App">
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="demo-logo" />
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
            />
            <Switch defaultChecked onChange={onChange} />
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{ background: colorBgContainer }}
              trigger={null}
              collapsible
              collapsed={collapsed}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                items={items2}
              />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default HomePage;
