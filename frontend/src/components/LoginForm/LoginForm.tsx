import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { TextInput } from '../../components/TextInput/TextInput';
import { PasswordInput } from '../../components/PasswordInput/PasswordInput';
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';

export function LoginForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { login, isLoggingIn } = useAuthStore();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		login(formData);
	};

	return (
		<div className='w-full'>
			<div className='w-full max-w-md space-y-8 p-6 sm:p-12 mx-auto auth-form__container'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<TextInput
						label='Email'
						type='email'
						placeholder='you@example.com'
						value={formData.email}
						onChange={value => setFormData({ ...formData, email: value })}
						icon='mail'
					/>

					<PasswordInput
						label='Password'
						value={formData.password}
						onChange={value => setFormData({ ...formData, password: value })}
					/>
					<SubmitButton isLoading={isLoggingIn}>Sign in</SubmitButton>
				</form>
				<div className='text-center'>
					<p className='text-base-content/60'>
						Don't have an account?{' '}
						<Link to='/register' className='link font-black hover:text-accent'>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
