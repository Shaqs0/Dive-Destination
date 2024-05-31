import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from '../LoginPage/LoginPage.module.css';

export type RegisterForm = {
	email: {
		value: string;
	};
    phone_number: {
        value: string;
    }
	password: {
		value: string;
	};
	name: {
		value: string;
	};
}

export function RegistrationPage() {

	return (
		<div className={styles['login']}>
			<Headling>Sign Up</Headling>
			<form className={styles['form']}>
				<div className={styles['field']}>
					<label htmlFor='email'>Email Address</label>
					<Input id='email' name='email' placeholder='Email' autoComplete="current-email"></Input>
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>Password</label>
					<Input id='password' name='password' type='password' placeholder='Password' autoComplete="current-password"></Input>
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>First Name</label>
					<Input id='name' name='name' placeholder='Name' autoComplete="current-name"></Input>
				</div>
				<Button appearence='big'>Sign Up</Button>
			</form>
			<div className={styles['links']}>
				<div>Have account?</div>
				<Link to="/auth/login">Sign In</Link>
			</div>
		</div>
	);
}