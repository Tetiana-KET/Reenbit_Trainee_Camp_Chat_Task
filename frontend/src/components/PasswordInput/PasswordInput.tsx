import { Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

type PasswordInputProps = {
	label: string;
	value: string;
	onChange: (value: string) => void;
};

export function PasswordInput({ label, value, onChange }: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='form-control'>
			<label className='label'>
				<span className='label-text font-medium'>{label}</span>
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
					<Lock className='size-5 text-base-content/40' />
				</div>
				<input
					type={showPassword ? 'text' : 'password'}
					className='input input-bordered w-full pl-10'
					placeholder='••••••••'
					value={value}
					onChange={e => onChange(e.target.value)}
				/>
				<button
					type='button'
					className='absolute inset-y-0 right-0 pr-3 flex items-center'
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? (
						<EyeOff className='size-5 text-base-content/40' />
					) : (
						<Eye className='size-5 text-base-content/40' />
					)}
				</button>
			</div>
		</div>
	);
}
