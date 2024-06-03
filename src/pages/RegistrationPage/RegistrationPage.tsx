import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from '../LoginPage/LoginPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { FormEvent, useEffect } from 'react';
import { register, userActions } from '../../store/user.slice';

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
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);


	useEffect (() => {
		if (jwt) {
			navigate('/MainPage');
		}
	}, [jwt, navigate] );

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearRegisterError());
		const target = e.target as typeof e.target & RegisterForm;
		const {email, password, name} = target;
		dispatch(register({email: email.value, password:password.value, name:name.value}));
	}; 

	return (
		<div className={styles['login']}>
			<Headling>Sign Up</Headling>
			{registerErrorMessage && <div className={styles['error']}>{registerErrorMessage}</div>}
			<form className={styles['form']}>
				<div className={styles['field']} onSubmit={submit}>
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