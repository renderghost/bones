// src/components/Heading/Heading.tsx
import * as React from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level: HeadingLevel;
	children: React.ReactNode;
	truncate?: boolean;
	className?: string;
}

const headingSizes = {
	1: 'text-4xl md:text-5xl mb-6',
	2: 'text-3xl md:text-4xl mb-5',
	3: 'text-2xl md:text-3xl mb-4',
	4: 'text-xl md:text-2xl mb-3',
} as const;

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ level, children, truncate = false, className = '', ...props }, ref) => {
		const elementType = level as HeadingLevel;

		const classes = [
			'font-bold text-slate-900 dark:text-slate-100',
			headingSizes[elementType],
			truncate && 'truncate',
			className,
		]
			.filter(Boolean)
			.join(' ');

		switch (elementType) {
			case 1:
				return (
					<h1 ref={ref} className={classes} {...props}>
						{children}
					</h1>
				);
			case 2:
				return (
					<h2 ref={ref} className={classes} {...props}>
						{children}
					</h2>
				);
			case 3:
				return (
					<h3 ref={ref} className={classes} {...props}>
						{children}
					</h3>
				);
			case 4:
				return (
					<h4 ref={ref} className={classes} {...props}>
						{children}
					</h4>
				);
			default:
				return (
					<h2 ref={ref} className={classes} {...props}>
						{children}
					</h2>
				);
		}
	},
);

Heading.displayName = 'Heading';
