import styled from 'styled-components';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 48px;
	align-self: stretch;
`;

const WriteForm = styled.div`
	margin: 0 20% 5% 20%;
	display: flex;
	padding: 48px 47px;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	gap: 26px -21px;
	flex: 1 0 0;
	align-self: stretch;
	flex-wrap: wrap;

	border-radius: 30px;
	border: 1px solid #ded8e1;

	background: #fff;
`;

const InputBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	align-self: stretch;
	gap: 30px;
	flex-wrap: wrap;
	flex-direction: column;
`;
const InputTitle = styled.input`
	width: 90%;
	height: 50px;
	color: #000;

	border-radius: 10px;
	border: 1px solid #ded8e1;
	font-family: SUIT;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	&placeholder {
		color: #ded8e1;
	}
`;

const InputContent = styled(InputTitle)`
	display: flex;
	height: 400px;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
`;
export { Box, WriteForm, InputBox, InputTitle, InputContent };