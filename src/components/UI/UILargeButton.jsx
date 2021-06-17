import styled from 'styled-components'
const UILargeButton = styled.div`
	background-color: ${({backgroundColor}) => backgroundColor || 'var(--color-primary)'};
	display: flex;
	text-align: left;
	justify-content: space-between;
	flex-flow: column nowrap;
	height: 100%;
	width: ${({width}) => width || '100%'};
	padding: 1em;
	color: white;
	outline: none;
	border: none;
	border-radius: ${({rounded}) => rounded || 0}px;
	& .label {
		padding: 0;
		text-align: left;
		line-height: 1.25;
		font-size: ${({labelSize}) => labelSize || 1}em;
	}
`
export default UILargeButton;