import React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';

const UIButtonIcon = ({onClick, iconButton}) => 
	<Button rounded="true" icon={iconButton} onClick={onClick} shape="circle" type="text" />

UIButtonIcon.propTypes = {
	onClick: PropTypes.func.isRequired,
	iconButton: PropTypes.object.isRequired,
}

export default UIButtonIcon;