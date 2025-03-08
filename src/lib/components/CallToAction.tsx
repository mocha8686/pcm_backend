import { Icon, type IconifyIcon } from '@iconify/react';
import type React from 'react';
import './CallToAction.css';

export interface CallToActionProps extends React.ComponentPropsWithoutRef<'a'> {
	icon: IconifyIcon | string;
	width?: number | string;
	height?: number | string;
	color?: string;
}

export default function CallToAction({
	icon,
	width,
	height,
	color,
	children,
	className,
	...props
}: CallToActionProps) {
	const iconProps = {
		icon,
		width: width ?? 24,
		height: height ?? width ?? 24,
		color,
	};
	return (
		<a className={`${className} call-to-action`} {...props}>
			<Icon {...iconProps} />
			{children}
		</a>
	);
}
