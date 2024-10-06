// Button.tsx

import React from 'react';
import { LucideIcon } from 'lucide-react';
import './button.css';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'caution' | 'transparent';
type ButtonContent =
	| 'labelOnly'
	| 'leftIcon'
	| 'rightIcon'
	| 'bothIcons'
	| 'iconOnly';

/**
 * Button component for user interactions.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** The text to display on the button */
	label?: string;
	/** The size of the button */
	size: ButtonSize;
	/** The visual style variant of the button */
	variant: ButtonVariant;
	/** The content layout of the button */
	contentType: ButtonContent;
	/** Icon to display when contentType is 'iconOnly' */
	icon?: LucideIcon;
	/** Icon to display on the left side of the label */
	leftIcon?: LucideIcon;
	/** Icon to display on the right side of the label */
	rightIcon?: LucideIcon;
	/** Whether the button should take up the full width of its container */
	fullWidth?: boolean;
	/** Whether the button is in a loading state */
	loading?: boolean;
	/** Tooltip text for the button */
	tooltip?: string;
}

/**
 * Primary UI component for user interaction
 */
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
