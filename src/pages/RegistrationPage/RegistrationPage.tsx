import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from '../LoginPage/LoginPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { FormEvent, useEffect, useState } from 'react';
import { register, userActions } from '../../store/user.slice';
import showIcon from '/public/view_icon.svg';
import hideIcon from '/public/view_hide_icon.svg';

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
	const [showPassword, setShowPassword] = useState(false);
	const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);


	const togglePasswordVisibility = () => {
		setShowPassword(prevState => !prevState);
	};

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
				<div className={styles['password_container']}>
					<div className={styles['field']}>
						<label htmlFor='password'>Password</label>
						<div className={styles['inpt_pswrd']}>
							<Input id='password' name='password' type={showPassword ? 'text' : 'password'} placeholder='Password' autoComplete="current-password" />
							<img 
								src={showPassword ? hideIcon : showIcon} 
								alt={showPassword ? 'Hide password' : 'Show password'} 
								onClick={togglePasswordVisibility} 
								className={styles['toggleIcon']} 
							/>
						</div>
					</div>
				</div>
				<div className={styles['field']}>
					<label htmlFor='name'>First Name</label>
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