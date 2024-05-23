import styles from './StartPage.module.css';

export function StartPage() {

	return (
		<div>
			<picture className={styles['pic']}>
				<source
					srcSet='public/big-480.jpg 480w, public/big-960.jpg 960w, public/big-1200.jpg 1200w, public/big-1920.jpg 1920w'
					sizes='(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw'
				/>
				<img src='public/big-1200.jpg' alt='Responsive Image'/>
			</picture>
		</div>
	);
}
