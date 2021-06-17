import React, {useState} from 'react';
import UICard from './../UI/UICard';
import UIButtonIcon from './../UI/UIButtonIcon';
import {Typography} from 'antd'
import Icon from '@mdi/react'
import {mdiEye, mdiEyeOff} from '@mdi/js';
import {number} from 'prop-types';

const { Title } = Typography;

const Balance = ({value}) => {
// States 
const [isVisible, setVisibility] = useState(true)
const [monetaryValue] = useState(value)
// Functions 
const handleToggleVisibility = () => setVisibility(!isVisible)
const valueIsNegative = () => monetaryValue < 0 && 'danger';
return (
	<UICard 
		title="Saldo atual"
		extra={
			<UIButtonIcon 
				onClick={handleToggleVisibility}
				iconButton={
					isVisible
					? <Icon color="#b1b1b1" path={mdiEye} size={1}></Icon>
					: <Icon color="#b1b1b1" path={mdiEyeOff} size={1}></Icon>
				}
			/>
		} 
	>
		<Title level={3} type={valueIsNegative()}>
			R$ {(isVisible ? (value).toFixed(2)  : '***') || "20,00"}
		</Title>
	</UICard>
	);
}
Balance.propTypes = {
	value: number.isRequired,
}
export default Balance;
