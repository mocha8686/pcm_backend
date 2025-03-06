import { Icon, type IconifyIcon } from '@iconify/react';
import type React from 'react';
import './Button.css';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	icon: IconifyIcon | string;
	width?: number | string;
	height?: number | string;
	color?: string;
}

export default function Button({
	icon,
	width,
	height,
	color,
	children,
	className,
	...props
}: ButtonProps) {
	const iconProps = { icon, width: width ?? 24, height: height ?? width ?? 24, color };
	return (
		<button className={`${className} button`} {...props}>
			<Icon {...iconProps} />
			{children}
		</button>
	);
}
