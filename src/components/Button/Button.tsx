import React from 'react';

export interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	label: string;
	onClick?: () => void;
}

export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const baseClasses =
		'inline-block cursor-pointer border-0 rounded-full font-bold leading-none font-sans';
	const primaryClasses = primary
		? 'bg-blue-500 text-white'
		: 'bg-transparent text-gray-800 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]';
	const sizeClasses = {
		small: 'py-2.5 px-4 text-xs',
		medium: 'py-3 px-5 text-sm',
		large: 'py-3.5 px-6 text-base',
	};

	return (
		<button
			type='button'
			className={`${baseClasses} ${primaryClasses} ${sizeClasses[size]}`}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
