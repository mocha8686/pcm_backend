import type React from 'react';
import './EmployeeCard.css';
import clsx from 'clsx';

export interface Employee {
	name: string;
	position: string;
	body: string;
	image: string;
}

export type Test = React.ComponentPropsWithoutRef<'div'> & Employee;

export interface EmployeeCardProps
	extends Employee,
		React.ComponentPropsWithoutRef<'div'> {
	portraitPosition?: 'left' | 'right' | 'top';
}

export default function EmployeeCard({
	name,
	position,
	body,
	image,
	className,
	portraitPosition,
	...props
}: EmployeeCardProps) {
	return (
		<div
			className={clsx(
				'EmployeeCard',
				`EmployeeCard--${portraitPosition ?? 'left'}`,
				className,
			)}
			{...props}
		>
			<img
				src={image}
				alt={`Portrait of ${name}`}
				className='EmployeeCard-portrait'
			/>

			<div className='EmployeeCard-info'>
				<div className='EmployeeCard-bio'>
					<h3 className='EmployeeCard-name'>{name}</h3>
					<p className='EmployeeCard-position'>{position}</p>
				</div>

				<p className='EmployeeCard-body'>{body}</p>
			</div>
		</div>
	);
}
