import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import styles from './ErrorPage.module.css';

export function ErrorPage() {
	return (
		<div className={styles['container']}>
			<Headling className={styles['error_code']}>Error 404</Headling>
			<p className={styles['error_info']}>Not Found</p>
			<div className={styles['btn']}>
				<Link to='/'>
					<Button appearence='big' className={styles['go_back']}>Go Back</Button>
				</Link>
			</div>
		</div>
	);
}