import React, {useState} from 'react'
import {Typography} from 'antd'
import UICard from './../UI/UICard'
import Icon from '@mdi/react'
import {mdiCreditCard} from '@mdi/js'
import {number} from 'prop-types'

const {Title} = Typography


const CreditCard = ({value}) => {
	const [monetaryValue] = useState(value)
	const valueIsNegative = () => monetaryValue < 0 && 'danger';
	return (
		<UICard
			title="Fatura atual"
			extra={
				<Icon color="#b1b1b1" path={mdiCreditCard} size={1}></Icon>
			}
		>
			<Title level={3} type={valueIsNegative()}>
				R$ {(value).toFixed(2)}
			</Title>
		</UICard>
	)
}

CreditCard.propTypes = {
	value: number.isRequired
}

export default CreditCard;