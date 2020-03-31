import React from 'react';
import styles from './header.module.css';

const Header = props => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.headerRow}>
					{props.children}
				</div>
			</div>
		</header>
	)
}

export default Header;
