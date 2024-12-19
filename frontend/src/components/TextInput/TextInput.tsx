import { User, Mail } from 'lucide-react';

type TextInputProps = {
	label: string;
	type?: string;
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
	icon?: 'user' | 'mail';
};

export function TextInput({
	label,
	type = 'text',
	placeholder = '',
	value,
	onChange,
	icon,
}: TextInputProps) {
	const Icon = icon === 'user' ? User : icon === 'mail' ? Mail : null;

	return (
		<div className='form-control'>
			<label className='label'>
				<span className='label-text font-medium'>{label}</span>
			</label>
			<div className='relative'>
				{Icon && (
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<Icon className='size-5 text-base-content/40' />
					</div>
				)}
				<input
					type={type}
					className='input input-bordered w-full pl-10'
					placeholder={placeholder}
					value={value}
					onChange={e => onChange(e.target.value)}
				/>
			</div>
		</div>
	);
}
