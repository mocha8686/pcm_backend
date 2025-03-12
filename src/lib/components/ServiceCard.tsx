import type React from 'react';
import Icon, { type IconProps } from './Icon';
import './ServiceCard.css';
import clsx from 'clsx';

export interface ServiceCardProps extends IconProps {
	title: string;
}

export default function ServiceCard({
	title,
	icon,
	className,
	children,
}: React.PropsWithChildren<ServiceCardProps>) {
	return (
		<div className={clsx('ServiceCard', className)}>
			<header className='ServiceCard-header'>
				<h2 className='ServiceCard-title'>{title}</h2>
				<Icon className='ServiceCard-icon' icon={icon} />
			</header>
			<div className='ServiceCard-body'>{children}</div>
		</div>
	);
}
