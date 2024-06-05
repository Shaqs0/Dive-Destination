import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './LoginPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { FormEvent, useEffect } from 'react';
import { login, userActions} from '../../store/user.slice';

export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
}

export function LoginPage () {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

	useEffect (() => {
		if (jwt) {
			navigate('/MainPage');
		}
	}, [jwt, navigate]);

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target & LoginForm;
		const {email, password} = target;
		await sendLogin(email.value, password.value);
	}; 

	const sendLogin = async (email: string, password: string) => {
		dispatch(login({email, password}));
	};  

	return (
		<div>
			<div className={styles['login']}>
				<Headling>Sign In</Headling>
				{loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
				<form className={styles['form']} onSubmit={submit}>
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