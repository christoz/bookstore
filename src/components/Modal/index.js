import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import MD from './ModalStyles'

/**
 * A dialog component as a modal which renders outside of the parent component.
 * @param {Object} param0
 */
const Modal = ({ visible, onHide, children }) => visible ? ReactDOM.createPortal(
	<>
		<MD.Overlay />
		<MD.Wrapper>
			<MD data-visible={visible}>
				<MD.Header>
					<MD.CloseButton
						type="button"
						data-dismiss="modal" aria-label="Close"
						onClick={onHide}
					>
						<span aria-hidden="true">&times;</span>
					</MD.CloseButton>
				</MD.Header>
				{children}
			</MD>
		</MD.Wrapper>
	</>, document.body
) : null

Modal.propTypes = {
	visible: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
}

export default Modal;
