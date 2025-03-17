import './Button.css';
import clsx from 'clsx';
import type React from 'react';
import Icon, { type IconProps } from './Icon';

export default function Button({
	children,
	className,
	icon,
	...props
}: Partial<IconProps> & React.ComponentPropsWithoutRef<'button'>) {
	// TODO: make it glow on hover/focus
	return (
		<button className={clsx('Button', className)} {...props}>
			{icon && <Icon icon={icon} className='Button-icon' />}
			{children}
		</button>
	);
}
