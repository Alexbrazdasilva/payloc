import React from 'react';
import { Card } from 'antd';
import { element, string, } from 'prop-types';

const UICard = ({ children, title, extra }) => (
  <Card title={title} extra={extra}>
    {children}
  </Card>
);

UICard.propTypes = {
  children: element,
  title: string.isRequired,
  extra: element,
}

export default UICard;
