import styles from './LayoutTop.module.css';

export function LayoutTop() {

	return <div className={styles['top']}>
		<p className={styles['name']}>Dive Destinations</p>
		<div className={styles['other']}>
			<ul>
				<li><a href='#'>About Us</a></li>
				<li><a href='#'>Dive Spots</a></li>
				<li><a href='#'>Dive packages</a></li>
				<li><a href='#'>Contact</a></li>
			</ul>
		</div>
	</div>;
}

