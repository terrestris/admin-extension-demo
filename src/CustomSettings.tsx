import React from 'react';
import { Menu } from 'antd';
import {
  BankOutlined
} from '@ant-design/icons';

type Props = {}

const CustomSettings: React.FC<Props> = () => {
  return <Menu.Item key="settings/custom-settings-item">
      <BankOutlined />
      <span>Custom settings item</span>
    </Menu.Item>;
};

export default CustomSettings;
