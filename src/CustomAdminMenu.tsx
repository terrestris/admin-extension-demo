import React from 'react';
import { Menu } from 'antd';
import {
  BankOutlined
} from '@ant-design/icons';

type Props = {}

const CustomAdminMenu: React.FC<Props> = () => {
  return <Menu.SubMenu key="custom-admin-menu" title="Custom admin menu">
      <Menu.Item key="custom-item">
        <BankOutlined />
        <span>Custom admin item</span>
      </Menu.Item>
    </Menu.SubMenu>;
};

export default CustomAdminMenu;
