import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import { AppDispath } from '../../store/store';
import styles from './MainPage.module.css';
import { userActions } from '../../store/user.slice';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	return (
		<div className={styles['content']}>
			<h1>Main Page</h1>
			<Button className={styles['exit']} onClick={logout}>
				<img src="/exit-icon.svg" alt='Иконка выхода'/>
				Выход
			</Button>
		</div>
	);
}