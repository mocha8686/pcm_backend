import { Icon, type IconifyIconProps } from '@iconify/react';
import type React from 'react';
import './CallToAction.css';

export interface CallToActionProps extends React.ComponentPropsWithoutRef<'a'> {
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
		<a className={`${className} call-to-action`} {...props}>
			{/* @ts-expect-error Icon uses an internal interface for its props which is compatible with this one, but we can't access it */}
			<Icon {...iconProps} />
			{children}
		</a>
	);
}
