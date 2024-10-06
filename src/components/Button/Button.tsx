// Button.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';
import './Button.css';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'caution' | 'transparent';
type ButtonContent =
	| 'labelOnly'
	| 'leftIcon'
	| 'rightIcon'
	| 'bothIcons'
	| 'iconOnly';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	size: ButtonSize;
	variant: ButtonVariant;
	contentType: ButtonContent;
	icon?: LucideIcon;
	leftIcon?: LucideIcon;
	rightIcon?: LucideIcon;
	fullWidth?: boolean;
	loading?: boolean;
	tooltip?: string;
}

const Button: React.FC<ButtonProps> = ({
	label,
	size,
	variant,
	contentType,
	icon: Icon,
	leftIcon: LeftIcon,
	rightIcon: RightIcon,
	fullWidth = false,
	loading = false,
	tooltip,
	className = '',
	disabled = false,
	...props
}) => {
	const buttonClasses = [
		'bones-button',
		`bones-button--${size}`,
		`bones-button--${variant}`,
		fullWidth ? 'bones-button--full-width' : '',
		loading ? 'bones-button--loading' : '',
		disabled ? 'bones-button--disabled' : '',
		className,
	]
		.filter(Boolean)
		.join(' ');

	const renderContent = () => {
		if (loading) {
			return (
				<span
					className='bones-button__spinner'
					aria-hidden='true'
				></span>
			);
		}

		switch (contentType) {
			case 'labelOnly':
				return <span>{label}</span>;
			case 'leftIcon':
				return (
					<>
						{LeftIcon && (
							<LeftIcon className='bones-button__icon bones-button__icon--left' />
						)}
						<span>{label}</span>
					</>
				);
			case 'rightIcon':
				return (
					<>
						<span>{label}</span>
						{RightIcon && (
							<RightIcon className='bones-button__icon bones-button__icon--right' />
						)}
					</>
				);
			case 'bothIcons':
				return (
					<>
						{LeftIcon && (
							<LeftIcon className='bones-button__icon bones-button__icon--left' />
						)}
						<span>{label}</span>
						{RightIcon && (
							<RightIcon className='bones-button__icon bones-button__icon--right' />
						)}
					</>
				);
			case 'iconOnly':
				return (
					Icon && (
						<Icon
							className='bones-button__icon'
							aria-hidden='true'
						/>
					)
				);
			default:
				return <span>{label}</span>;
		}
	};

	return (
		<button
			className={buttonClasses}
			disabled={disabled || loading}
			title={tooltip}
			aria-label={contentType === 'iconOnly' ? label : undefined}
			{...props}
		>
			{renderContent()}
		</button>
	);
};

export default Button;
