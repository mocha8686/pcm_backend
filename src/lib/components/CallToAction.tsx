import { Icon, type IconifyIconProps } from '@iconify/react';
import type React from 'react';
import './CallToAction.css';
import { Link } from 'react-router';
import clsx from 'clsx';

export interface CallToActionProps
	extends React.ComponentPropsWithoutRef<typeof Link> {
	icon: string | IconifyIconProps;
}

export default function CallToAction({
	icon,
	children,
	className,
	...props
}: CallToActionProps) {
	const iconProps = typeof icon === 'string' ? { icon } : icon;

	return (
		<Link className={clsx(className, 'CallToAction')} {...props}>
			{/* @ts-expect-error Icon uses an internal interface for its props which is compatible with this one, but we can't access it */}
			<Icon className='CallToAction-icon' {...iconProps} />
			{children}
		</Link>
	);
}
