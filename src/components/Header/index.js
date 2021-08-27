import React from "react";
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import {useState} from "react";

const Header = () => {

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };
  return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <NavLink className="item__Header" to="/">Posts</NavLink>
          </Menu.Item>

          <Menu.Item key="2" icon={<PieChartOutlined />}>
            <NavLink className="item__Header" to="/test">Test</NavLink>
          </Menu.Item>
        </Menu>
      </div>
  )
}

export default Header;