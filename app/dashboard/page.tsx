"use client";
import "../public/style/dashboard.css";

import React, { useState } from "react";
import {
  JavaScriptOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  StockOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import styled from "styled-components";
import Liguagens from "./liguagens";
import Studies from "./studies/page";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const listItemMenu = [
    {
      key: "1",
      icon: <StockOutlined />,
      label: "Estudos",
      content: <Studies></Studies>,
    },
    {
      key: "2",
      icon: <TrophyOutlined />,
      label: "Qualidades",
      content: "AS",
    },
    {
      key: "3",
      icon: <JavaScriptOutlined />,
      label: "Linguagens",
      content: <Liguagens></Liguagens>,
    },
  ];

  const [pageKey, setPageKey] = useState("1");

  return (
    <LayoutMain>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical flex items-center justify-center py-4 transition-all duration-300 mb-1 ">
          <h1 className="gradient-text text-[20px] font-bold ">
            {collapsed ? " DJ" : "< Dev Johnny />"}
          </h1>
        </div>
        <SideMenu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[`${pageKey}`]}
          onClick={(event) => {
            setPageKey(event.key);
          }}
          items={listItemMenu}
        />
      </Sider>
      <Layout>
        <Headerlayout>
          <ButtonMenu
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />

          <h1 className="text-[white] text-[18px]  ">Olá, Deivison </h1>
        </Headerlayout>
        <BoxBreadcrumb style={{ margin: "16px 0", color: "white" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </BoxBreadcrumb>
        <ContentPage
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {listItemMenu[parseInt(pageKey) - 1].content}
        </ContentPage>
      </Layout>
    </LayoutMain>
  );
};

const LayoutMain = styled(Layout)`
  width: 100%;
  height: 100vh;
  background-color: gray; 

  .ant-layout-sider {
    background-color: #09090b;
  }

  .ant-layout {
    background-color: #3c3c47;
  }

  .ant-layout-content {
    padding: 0px;
    border-radius: 10px;

    background-color: #17191b !important;
  }
`;

const SideMenu = styled(Menu)`
  background-color: transparent;

  .ant-menu:hover {
    color: white;
  }
  .ant-menu-item {
    color: white !important;
  }

  .ant-menu-item-selected {
    background-color: #8750f7;
    color: #ffffff;
  }

  .ant-menu-item-selected:hover {
    color: white;
    background-color: #a577ff;
  }
`;

const Headerlayout = styled(Header)`
  background-color: #09090b;
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 25px;
`;

const BoxBreadcrumb = styled(Breadcrumb)`
  .ant-breadcrumb-separator,
  .ant-breadcrumb-link {
    color: white;
  }

  padding-left: 20px;
`;

const ContentPage = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  min-height: 280;
  background-color: gray;
  padding: 10px;
  box-shadow: 0px 0px 15px -2px #00000039;
`;

const ButtonMenu = styled(Button)`
  font-size: 16px;
  width: 64;
  height: 64;
  color: white;
`;
export default Dashboard;
