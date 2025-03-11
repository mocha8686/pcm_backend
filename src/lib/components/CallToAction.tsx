import { Icon, type IconifyIconProps } from '@iconify/react';
import type React from 'react';
import './CallToAction.css';
import { Link, type LinkProps } from 'react-router';
import clsx from 'clsx';

interface CallToActionProps {
	icon: string | IconifyIconProps;
}

export default function CallToAction({
	icon,
	children,
	className,
	ctaType = 'a',
	...componentProps
}: React.PropsWithChildren<CallToActionExtendProps>) {
	const iconProps = typeof icon === 'string' ? { icon } : icon;

	const contents = (
		<>
			{/* @ts-expect-error Icon uses an internal interface for its props (though IconifyIconProps is compatible with it) */}
			<Icon className='CallToAction-icon' {...iconProps} />
			{children}
		</>
	);

	const classes = clsx(className, 'CallToAction');

	if (isButtonProps(ctaType, componentProps)) {
		return (
			<button className={classes} {...componentProps}>
				{contents}
			</button>
		);
	}

	if (isAnchorProps(ctaType, componentProps)) {
		return (
			<Link className={classes} {...componentProps}>
				{contents}
			</Link>
		);
	}
}

function isButtonProps(
	ctaType: 'button' | 'a' | undefined,
	props: CallToActionButtonProps | CallToActionAnchorProps,
): props is CallToActionButtonProps {
	return (ctaType && ctaType === 'button') || false;
}

function isAnchorProps(
	ctaType: 'button' | 'a' | undefined,
	props: CallToActionButtonProps | CallToActionAnchorProps,
): props is CallToActionAnchorProps {
	return !ctaType || ctaType === 'a';
}

type CallToActionButtonProps = React.ComponentPropsWithoutRef<'button'>;
type CallToActionAnchorProps = LinkProps & { to: string };

export type CallToActionExtendProps = CallToActionProps &
	(
		| ({ ctaType: 'button' } & CallToActionButtonProps)
		| ({ ctaType?: 'a' } & CallToActionAnchorProps)
	);
