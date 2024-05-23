import styles from './StartPage.module.css';

export function StartPage() {
	return (
		<div className={styles['container']}>
			<div className={styles['imageContainer']}>
				<picture className={styles['pic']}>
					<source
						srcSet='public/big-1920.jpg 1920w'
						sizes='100vw'
					/>
					<img src='public/big-1920.jpg' alt='Responsive Image' />
				</picture>
				<div className={styles['textOverlay']}>Dive into a world of wonder and explore the breathtaking beauty beneath the waves with Dive Destinations</div>
			</div>
			<div className={styles['destinations']}>
				<p className={styles['top_text']}>Discover Our Top Destinations:</p>
				<div>
					<p className={styles['text']}>The Great Barrier Reef: Dive into the world’s largest coral reef system, teeming with colorful marine life and stunning coral formations.</p>
					<picture className={styles['img']}>
						<source
							srcSet='public/riff.png 1920w'
							sizes='100vw'
						/>
						<img src='public/riff.png' alt='Responsive Image' />
					</picture>
				</div>
				<div>
					<p className={styles['text']}>The Blue Hole, Belize: Experience the thrill of diving into this iconic sinkhole, known for its deep blue waters and unique geological formations.</p>
					<picture className={styles['img']}>
						<source
							srcSet='public/blue_holl_1200px.png 1920w'
							sizes='100vw'
						/>
						<img src='public/blue_holl_1200px.png' alt='Responsive Image' />
					</picture>
				</div>
				<div>
					<p className={styles['text']}>Maldives Atolls: Explore crystal-clear waters, vibrant coral reefs, and an abundance of marine species in this tropical paradise.</p>
					<picture className={styles['img']}>
						<source
							srcSet='public/Maldives.png 1920w'
							sizes='100vw'
						/>
						<img src='public/Maldives.png' alt='Responsive Image' />
					</picture>
				</div>
			</div>
		</div>
	);
}
