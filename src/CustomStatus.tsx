import React from 'react';
import { Menu } from 'antd';
import {
  BankOutlined
} from '@ant-design/icons';

type Props = {}

const CustomStatus: React.FC<Props> = () => {
  return <Menu.Item key="status/custom-status-item">
      <BankOutlined />
      <span>Custom status item</span>
    </Menu.Item>;
};

export default CustomStatus;
