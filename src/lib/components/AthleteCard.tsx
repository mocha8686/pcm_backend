import type React from 'react';
import './AthleteCard.css';
import clsx from 'clsx';
import { Link } from 'react-router';

export interface Athlete {
	name: string;
	position: string;
	school: string;
	tags?: string[];
	image: string;
}

export type AthleteCardProps = React.ComponentPropsWithRef<typeof Link> &
	Athlete;

export default function AthleteCard({
	name,
	position,
	school,
	tags,
	image,
	className,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	to,
	...props
}: AthleteCardProps) {
	// TODO: link to real profiles
	return (
		<Link
			to='/athletes/demo'
			className={clsx('AthleteCard', className)}
			{...props}
		>
			<div className='AthleteCard-portraitContainer'>
				<img
					src={image}
					alt={`Portrait of ${name}`}
					className='AthleteCard-portrait'
				/>
			</div>
			<h3 className='AthleteCard-name'>{name}</h3>
			<div className='AthleteCard-info'>
				<p className='AthleteCard-position'>{position}</p>
				<p className='AthleteCard-school'>{school}</p>
			</div>

			{tags && (
				<ul className='AthleteCard-tags'>
					{tags.map(tag => (
						<li key={tag} className='AthleteCard-tag'>
							{tag}
						</li>
					))}
				</ul>
			)}
		</Link>
	);
}
