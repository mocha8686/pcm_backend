import './AthleteProfile.css';
import type { Stat } from '$lib/components/StatCard';
import StatCard from '$lib/components/StatCard';
import amos from '$lib/assets/amos-aguilera.webp';
import CallToAction from '$lib/components/CallToAction';
import TagList, { type ListTag } from '$lib/components/TagList';
import StatCarousel, { CarouselStatCard } from './lib/components/StatCarousel';

export default function AthleteProfile() {
	const tags: ListTag[] = [
		{ id: 0, body: 'Football' },
		{ id: 1, body: 'NIL' },
		{ id: 2, body: 'Team Lead' },
	];

	const baseballStats: CarouselStatCard = {
		id: 0,
		title: 'Baseball',
		icon: 'tabler:ball-baseball',
		stats: [
			{
				id: 0,
				name: 'Body',
				body: '6-3, 200 pounds. Strong frame with present strength.',
			},
			{
				id: 1,
				name: 'Hit',
				body: 'RHH. Slightly open stance that evens out when he strides. Hands rest away from back shoulder. Higher launch angle that produces a lot of fly balls. 64.3 mph bat speed with 12g of rotational acceleration.',
			},
			{
				id: 2,
				name: 'Power',
				body: '89 mph max exit velocity (78 avg.); 339-foot max batted distance. Consistently pulls the ball.',
			},
			{
				id: 3,
				name: 'Arm',
				body: 'RH. INF - 71.00 mph. Side arm release across the infield.',
			},
			{
				id: 4,
				name: 'Defense',
				body: 'Calm footwork through the play.',
			},
		],
	};

	const generalStats: CarouselStatCard = {
		id: 1,
		title: 'General Stats',
		icon: 'tabler:run',
		stats: [
			{ id: 0, name: 'Speed', body: '7.02 seconds in the 60-yard dash.' },
			{ id: 1, name: 'Stride', body: 'Long and tall strides.' },
		],
	};

	const stats = [baseballStats, generalStats];

	return (
		<main>
			<header className='AthleteProfile-header'>
				<div className='AthleteProfile-portraitFlex'>
					<div className='AthleteProfile-portraitContainer'>
						<img
							className='AthleteProfile-portrait'
							src={amos}
							alt='Portrait of Amos Aguilera'
						/>
					</div>
				</div>

				<div className='AthleteProfile-headerInfo'>
					<h1 className='AthleteProfile-title'>Amos Aguilera</h1>
					<p>1B | Jurupa Hills High School</p>
					<TagList tags={tags} />
				</div>
			</header>

			<section className='AthleteProfile-stats'>
				<h2 className='AthleteProfile-statsHeader'>Stats</h2>

				<StatCarousel stats={stats} />
			</section>

			<section className='AthleteProfile-bio'>
				<h2 className='AthleteProfile-bioTitle'>Premiere Pinch-Hitter Pro</h2>

				<p>
					Amos Aguilera is a 6'1", 170-pound first baseman from Fontana, CA,
					with a tall, projectable frame and room to add strength. A multi-sport
					athlete competing in basketball and wrestling, he brings athleticism,
					coordination, and toughness to the baseball field. Defensively, he has
					soft hands, solid footwork, and a strong feel for the glove, making
					him a reliable presence at first base. His short arm action leads to
					accurate throws, and with further development—particularly by driving
					through his target—he can add more velocity.
				</p>

				<p>
					At the plate, Aguilera is a right-handed hitter with a slightly open
					stance and a small leg lift trigger for timing. His rotational swing
					and strong hands generate solid bat speed, allowing him to drive the
					ball into the gaps. With further refinement—such as incorporating a
					deeper hand load and working through the ball more efficiently—he has
					the potential to unlock even greater power. His multi-sport background
					enhances his strength, agility, and competitiveness, making him a
					well-rounded athlete with significant upside as he continues to
					develop.
				</p>
			</section>

			<section className='AthleteProfile-callToActionContainer'>
				<h2>Want to Get in Touch with This Athlete?</h2>
				<CallToAction icon='tabler:mail-fast' to='/contact'>
					Contact Us Now
				</CallToAction>
			</section>
		</main>
	);
}
