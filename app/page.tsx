"use client";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Avatar,
  Breadcrumb,
  Button,
  ConfigProvider,
  Layout,
  Menu,
  Space,
  Switch,
  theme,
} from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { darkTheme, lightTheme } from "./themeConfig";
const { Header, Content, Sider } = Layout;

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
              position: `sticky`,
              top: 0,
              zIndex: 1,
              width: `100%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              height: `80px`,
              lineHeight: `normal`,
              background: currentTheme === "dark" ? `#011D53` : `#fff`,
            }}
          >
            <div className="demo-logo">
              <Image
                src={
                  currentTheme === "dark"
                    ? `/logo-white.png`
                    : `/logo-black.png`
                }
                width={148}
                height={48}
                alt="logo"
              />
            </div>
            <Space>
              <Switch
                defaultChecked
                onChange={onChange}
                checkedChildren={"Dark"}
                unCheckedChildren={"Light"}
                style={{ color: "#011D53" }}
              />
              <Image
                src="/notification.png"
                width={20}
                height={20}
                alt="notification"
              />
              <Image src="/search.png" width={34} height={34} alt="search" />
              <Image src="/ai.png" width={46} height={55} alt="chat-ai" />
              <Avatar
                size={48}
                src={
                  <Image
                    src="/profile.png"
                    width={48}
                    height={48}
                    alt="profilePicture"
                  />
                }
              />
            </Space>
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{ background: colorBgContainer }}
              trigger={null}
              collapsible
              collapsed={true}
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
                <Button>Test btn</Button>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default HomePage;
