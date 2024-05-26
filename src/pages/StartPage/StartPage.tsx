import Button from '../../components/Button/Button';
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
				<div className={styles['textOverlay']}>
					<p>Dive into a world of wonder and explore the breathtaking beauty beneath the waves with Dive Destinations</p>
					<Button appearence='small' className={styles['btn']}>Start diving</Button>
				</div>
			</div>
			<div className={styles['destinations']}>
				<p className={styles['top_text']}>Discover Our Top Destinations:</p>
				<div className={styles['box']}>
					<button className={styles['destination_button']}>
						<p className={styles['text']}><span>The Great Barrier Reef</span> The Great Barrier Reef is the world's largest coral reef system, stretching over 2,300 kilometers along the northeast coast of Australia. It is composed of over 2,900 individual reefs and 900 islands, making it one of the most diverse ecosystems on the planet. The reef is renowned for its stunning biodiversity, housing thousands of species of marine life, including colorful coral, fish, turtles, sharks, and rays. It is a UNESCO World Heritage Site and attracts millions of tourists each year for snorkeling, scuba diving, and marine exploration.</p>
						<picture className={styles['img']}>
							<source
								srcSet='public/riff.png 1920w'
								sizes='100vw'
							/>
							<img src='public/riff.png' alt='Responsive Image' />
						</picture>
					</button>
					<button className={styles['destination_button']}>
						<p className={styles['text']}><span>The Blue Hole, Belize</span>The Blue Hole, located off the coast of Belize, is a world-renowned diving site famous for its stunning natural beauty and unique geological formations. This underwater sinkhole measures approximately 300 meters across and 125 meters deep, featuring crystal-clear blue waters that attract divers from around the globe. Divers can explore its depths and encounter fascinating marine life, including various species of fish, sharks, and coral formations. The Blue Hole offers an unforgettable diving experience, providing divers with the opportunity to witness its mesmerizing underwater scenery and vibrant ecosystem.</p>
						<picture className={styles['img']}>
							<source
								srcSet='public/blue_holl.png 1920w'
								sizes='100vw'
							/>
							<img src='public/blue_holl.png' alt='Responsive Image' />
						</picture>
					</button>
					<button className={styles['destination_button']}>
						<p className={styles['text']}><span>Maldives Atolls</span>The Maldives Atolls are a breathtaking tropical paradise located in the Indian Ocean, renowned for their stunning natural beauty and vibrant underwater ecosystems. Comprising over 1,000 coral islands grouped into 26 atolls, the Maldives offer some of the world's most pristine and diverse diving experiences. Divers can explore crystal-clear waters teeming with colorful coral reefs, exotic fish species, and other marine life, including sharks, rays, and turtles. With its year-round warm climate and visibility exceeding 30 meters, the Maldives provide ideal conditions for both novice and experienced divers. From exhilarating drift dives to tranquil reef explorations, the Maldives Atolls offer an unforgettable underwater adventure for diving enthusiasts of all levels.</p>
						<picture className={styles['img']}>
							<source
								srcSet='public/Maldives.png 1920w'
								sizes='100vw'
							/>
							<img src='public/Maldives.png' alt='Responsive Image' />
						</picture>
					</button>
					<button className={styles['destination_button']}>
						<p className={styles['text']}><span>Palau</span> Palau, located in the western Pacific Ocean, is a paradise for diving enthusiasts. Renowned for its stunning biodiversity and pristine underwater landscapes, Palau boasts some of the world's most sought-after dive sites. From vibrant coral reefs to dramatic drop-offs and underwater caves, Palau offers diverse diving experiences for adventurers of all levels. Divers can encounter a rich array of marine life, including sharks, manta rays, turtles, and colorful reef fish. One of Palau's highlights is its famous Jellyfish Lake, where visitors can snorkel among millions of harmless jellyfish. With warm waters, excellent visibility, and conservation efforts aimed at preserving its marine treasures, Palau is a must-visit destination for any diving enthusiast.</p>
						<picture className={styles['img']}>
							<source
								srcSet='public/Palau-Micronesia-Scuba-Diving.jpg 1920w'
								sizes='100vw'
							/>
							<img src='public/Palau-Micronesia-Scuba-Diving.jpg' alt='Responsive Image' />
						</picture>
					</button>
					<button className={styles['destination_button']}>
						<p className={styles['text']}><span>Galapagos Islands</span>The Galapagos Islands, located in the Pacific Ocean off the coast of Ecuador, are a haven for diving enthusiasts seeking unparalleled marine biodiversity. Made famous by Charles Darwin's studies, the Galapagos offer a unique opportunity to explore pristine underwater ecosystems teeming with endemic species found nowhere else on Earth. Divers can encounter an incredible variety of marine life, including hammerhead sharks, sea lions, marine iguanas, and giant manta rays. The islands' nutrient-rich waters attract large pelagic species, making it an ideal destination for thrilling drift dives and encounters with whale sharks and schools of hammerheads. With its rugged volcanic landscapes, crystal-clear waters, and abundance of marine wonders, the Galapagos Islands provide an unforgettable diving experience for adventurers seeking adventure and discovery.</p>
						<picture className={styles['img']}>
							<source
								srcSet='public/galapagos islands.jpeg 1920w'
								sizes='100vw'
							/>
							<img src='public/galapagos islands.jpeg' alt='Responsive Image' />
						</picture>
					</button>
					<button className={styles['destination_button']}>
						<p className={styles['text']}><span>Hawaii</span>Hawaii, situated in the central Pacific Ocean, is a captivating destination for diving enthusiasts seeking diverse marine life and stunning underwater landscapes. With its warm tropical waters and vibrant coral reefs, Hawaii offers an array of diving experiences suitable for both beginners and experienced divers alike. Divers can explore underwater lava formations, colorful coral gardens, and encounter an abundance of marine species, including tropical fish, sea turtles, dolphins, and even humpback whales during the winter months. Hawaii's clear waters provide excellent visibility for underwater photography and marine observation. Whether exploring the underwater caves of Kauai, the vibrant reefs of Maui, or the famous Molokini Crater, Hawaii promises unforgettable diving adventures amidst its breathtaking natural beauty.</p>
						<picture className={styles['img']}>
							<source
								srcSet='public/Hawaii.jpg 1920w'
								sizes='100vw'
							/>
							<img src='public/Hawaii.jpg' alt='Responsive Image' />
						</picture>
					</button>
					<button className={styles['destination_button']}>
						<p className={styles['text']}><span>Sipadan Island</span> Sipadan Island, located off the coast of Sabah, Malaysia, is celebrated as one of the world's premier diving destinations. Renowned for its breathtaking underwater biodiversity and stunning coral reefs, Sipadan offers an unforgettable diving experience for enthusiasts of all levels. Divers can explore vibrant coral gardens, steep drop-offs, and encounter an extraordinary variety of marine life, including schools of barracudas, reef sharks, turtles, and colorful reef fish. One of the island's highlights is the chance to witness unique underwater formations such as Turtle Tomb, a cavernous network where sea turtles come to rest. With its crystal-clear waters, abundant marine life, and conservation efforts aimed at preserving its pristine environment, Sipadan Island promises an exceptional diving adventure amidst the wonders of the sea.</p>
						<picture className={styles['img']}>
							<source
								srcSet='public/Sipadan.jpg 1920w'
								sizes='100vw'
							/>
							<img src='public/Sipadan.jpg' alt='Responsive Image' />
						</picture>
					</button>
				</div>
			</div>
		</div>
	);
}
