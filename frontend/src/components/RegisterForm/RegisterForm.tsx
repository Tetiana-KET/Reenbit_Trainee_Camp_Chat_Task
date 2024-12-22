import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { TextInput } from '../../components/TextInput/TextInput';
import { PasswordInput } from '../../components/PasswordInput/PasswordInput';
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';
import { useValidateForm } from '../../hooks/useValidateForm';

export function RegisterForm() {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
	});

	const { signup, isSigningUp } = useAuthStore();
	const { validateForm } = useValidateForm();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm(formData)) {
			signup(formData);
		}
	};

	return (
		<div className='flex flex-col m-auto w-full'>
			<div className='text-center mb-6'>
				<div className='flex flex-col items-center gap-2 group'>
					<h1 className='text-2xl font-bold mt-2'>Create Account</h1>
					<p className='text-base-content/60'>
						Get started with your free account
					</p>
				</div>
			</div>

			<div className='w-full max-w-md space-y-8 p-6 sm:p-12 mx-auto auth-form__container'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<TextInput
						label='Full Name'
						placeholder='John Doe'
						value={formData.fullName}
						onChange={value => setFormData({ ...formData, fullName: value })}
						icon='user'
					/>
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
					<SubmitButton isLoading={isSigningUp}>Create Account</SubmitButton>
				</form>
				<div className='text-center'>
					<p className='text-base-content/60'>
						Already have an account?{' '}
						<Link to='/login' className='link font-black hover:text-accent'>
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
