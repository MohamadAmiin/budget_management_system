import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { DashboardOutlined, DollarCircleOutlined, FileAddOutlined, FileTextOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

// Import your actual page components
import Dashboard from '../pages/Dashboard';
import Budget from '../pages/budget';
import Expenses from '../pages/Expenses';
import Reports from '../pages/Reports';

const { Header, Content, Sider, Footer } = Layout;

const Layouts = () => {
  const location = useLocation(); // To highlight the active route

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar with sticky and full screen height */}
      <Sider
        width={250}
        className="site-layout-background"
        theme="dark"
        style={{ position: 'sticky', top: 0, height: '100vh' }} // Make sidebar sticky and full height
      >
        <div className="logo" style={{ color: 'white', padding: '16px', fontSize: '24px' }}>
          Budget Management
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]} // Highlight the active menu item
        >
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard Overview</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/budget" icon={<DollarCircleOutlined />}>
            <Link to="/dashboard/budget">Budget</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/expenses" icon={<FileTextOutlined />}>
            <Link to="/dashboard/expenses">Expenses</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/reports" icon={<FileTextOutlined />}>
            <Link to="/dashboard/reports">Reports</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main layout */}
      <Layout>
        {/* Navbar (Header) */}
        <Header className="site-layout-background" style={{ padding: 0, background: 'lightyellow' }}>
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            style={{ position: 'absolute', right: 16, top: 16 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Header>

        {/* Content */}
        <Content style={{ padding: '24px 50px', margin: 0, minHeight: 280, background: 'lightblue' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="budget" element={<Budget />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="reports" element={<Reports />} />
          </Routes>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: 'center', background: 'lightyellow'}}>
          Dashboard ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
