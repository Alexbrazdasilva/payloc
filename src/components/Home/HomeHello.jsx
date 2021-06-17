import React from 'react';
import { Typography, Space } from 'antd';

const { Title } = Typography;

// eslint-disable-next-line react/prop-types
const HomeHello = ({ userName, className }) => (
  <Space direction="vertical">
    <Title className={`text-white ${className}`} level={3}>
      Hi,
      {` ${userName || 'Francy'}`}
    </Title>
  </Space>
);
export default HomeHello;
