import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './LoginPage.module.css';

export function LoginPage () {
	return (
		<div>
			<div className={styles['login']}>
				<Headling>Sign In</Headling>
				<form className={styles['form']}>
					<div className={styles['field']}>
						<label htmlFor='email'>Email Address</label>
						<Input id='email' name='email' placeholder='Email' autoComplete="current-email"></Input>
					</div>
					<div className={styles['field']}>
						<label htmlFor='password'>Password</label>
						<Input id='password' name='password' type='password' placeholder='Password' autoComplete="current-password"></Input>
					</div>
					<Button appearence='big'>Sign In</Button>
				</form>
				<div className={styles['links']}>
					<div>Have account?</div>
					<Link to="/auth/registration">Sign Up</Link>
				</div>
			</div>
		</div>
	);
}