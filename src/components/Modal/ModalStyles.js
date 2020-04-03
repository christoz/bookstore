import styled from 'styled-components';

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1040;
	width: 100vw;
	height: 100vh;
	background-color: #000;
	opacity: .5;
`;

const Modal = styled.div`
	z-index: 100;
	background: white;
	position: relative;
	margin: 1.75rem auto;
	border-radius: 3px;
	max-width: 500px;
	padding: 2rem;
`;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1050;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	outline: 0;
`;

const Header = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const CloseButton = styled.button`
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1;
	color: #000;
	opacity: .3;
	cursor: pointer;
	border: none;
`;


Modal.Overlay = Overlay;
Modal.Wrapper = Wrapper;
Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
