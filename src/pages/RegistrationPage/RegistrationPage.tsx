import Input from '../../components/Input/Input';
import styles from './Registration.module.css';

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
		<div className={styles['content']}>
			<h1>Registration Form</h1>
			<Input/>
		</div>
	);
	
}