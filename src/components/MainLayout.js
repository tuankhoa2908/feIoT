import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
    AiOutlineDashboard,
} from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { FaSolarPanel } from "react-icons/fa";
import { MdDeviceHub } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className='text-white fs-5 text-center py-3 mb-0'>
                        <span className='sm-logo'><FaSolarPanel /></span>
                        <span className='lg-logo'>IoT</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key === "signout") { }
                        else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className='fs-4' />,
                            label: 'Dash Board',
                        },
                        {
                            key: 'record',
                            icon: <FaClipboardList className='fs-4' />,
                            label: 'Records',
                        },
                        {
                            key: 'device',
                            icon: <MdDeviceHub className='fs-4' />,
                            label: 'Devices',
                        },
                        {
                            key: 'account',
                            icon: <MdManageAccounts className='fs-4' />,
                            label: 'Account',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className='d-flex justify-content-between ps-1 pe-5'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <div className="d-flex gap-4 align-items-center">
                        <div className="position-relative">
                            <IoIosNotifications className="fs-4" />
                            <span className="badge bg-warning rounded-circle p-1 position-absolute">
                                3
                            </span>
                        </div>
                        <div className="d-flex gap-3 align-items-center dropdown">
                            <div>
                                <img
                                    width={32}
                                    height={32}
                                    src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                                    alt=""
                                />
                            </div>
                            <div
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <h5 className="mb-0">Nguyen Tuan Khoa</h5>
                                <p className="mb-0">tuankhoa2908@gmail.com</p>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{ height: "auto", lineHeight: "20px" }}
                                        to="/"
                                    >
                                        View Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{ height: "auto", lineHeight: "20px" }}
                                        to="/"
                                    >
                                        Signout
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: "#ced4da",
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;