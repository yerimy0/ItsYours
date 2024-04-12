import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Users/Modal';
import { Form, Input, Button, ErrorMessage } from '../../Users/UsersStyles';

const FindPasswordForm = () => {
	const navigate = useNavigate();
	const [userId, setUserId] = useState('');
	const [userIdError, setUserIdError] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

	const handleUserIdBlur = () => {
		if (!userId.trim()) {
			setUserIdError('아이디를 입력해주세요.');
		} else {
			setUserIdError('');
		}
	};

	const handleEmailBlur = () => {
		if (!email.trim()) {
			setEmailError('이메일을 입력해주세요.');
		} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailError('유효하지 않은 이메일 형식입니다.');
		} else {
			setEmailError('');
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();

		if (!userId.trim() || userIdError || !email.trim() || emailError) {
			setModalMessage('아이디와 이메일을 정확하게 입력해주세요.');
			setIsModalOpen(true);
			setTimeout(() => setIsModalOpen(false), 3000);
			return;
		}

		setModalMessage('비밀번호를 이메일로 보냈습니다.\n이메일을 확인해주세요.');
		setIsModalOpen(true);
		setTimeout(() => {
			setIsModalOpen(false);
			navigate('/login');
		}, 3000);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="아이디를 입력해주세요"
					value={userId}
					onChange={e => setUserId(e.target.value)}
					onBlur={handleUserIdBlur}
				/>
				{userIdError && <ErrorMessage>{userIdError}</ErrorMessage>}
				<Input
					type="text"
					placeholder="이메일을 입력해주세요"
					value={email}
					onChange={e => setEmail(e.target.value)}
					onBlur={handleEmailBlur}
				/>
				{emailError && <ErrorMessage>{emailError}</ErrorMessage>}
				<Button type="submit">비밀번호 찾기</Button>
			</Form>
			{isModalOpen && (
				<Modal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
			)}
		</>
	);
};

export default FindPasswordForm;
