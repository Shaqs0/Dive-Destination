import { Outlet } from 'react-router-dom';
import styles from './LayoutFoot.module.css';

export function LayoutFoot() {
	return (
		<div className={styles['layout']}>
			<div className={styles['content']}>
				<Outlet />
			</div>
			<footer className={styles['footer']}>
				<p>About Us</p>
				<p>Destinations</p>
				<p>Packages</p>
				<p>Blog</p>
				<p>Contact</p>
			</footer>
			<div className={styles['others']}>
				<div className={styles['icons']}>
					<img src='public/facebook_icon.svg' 
						alt="Facebook Icon"/>
					<img src='public/instagram_icon.svg' 
						alt="Instagram Icon"/>
					<img src='public/twitter_icon.svg'
						alt="Twitter Icon"/>
				</div>
				<div className={styles['name']}>
					<span>@2024 Dive Destinations</span>
				</div>
			</div>
		</div>
	);
}
