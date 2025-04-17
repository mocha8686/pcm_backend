import './Athletes.css';
import AthleteCard, { Athlete } from '$lib/components/AthleteCard';
import ContactForm from '$lib/components/ContactForm';
import { ContactInfoItem } from '$lib/components/ContactInfo';
import { useState } from 'react';
import AthleteCarousel, {
	CarouselAthlete,
} from '$lib/components/AthleteCarousel';
import AthleteGrid from '$lib/components/AthleteGrid';
import athlete0 from '$lib/assets/amos-aguilera.webp';
import athlete1 from '$lib/assets/athlete1.webp';
import athlete2 from '$lib/assets/athlete2.jpeg';
import athlete3 from '$lib/assets/athlete3.jpg';
import Icon from '$lib/components/Icon';

export default function Athletes() {
	const [searchQuery, setSearchQuery] = useState('');

	// Sample athlete data - replace with your actual data source
	const athletes: CarouselAthlete[] = [
		{
			id: 1,
			name: 'Amos Aguilera',
			position: '1B',
			school: 'Jurupa Hills High School',
			tags: ['Baseball', 'NIL', 'Multi-Sport'],
			image: athlete0,
		},
		{
			id: 2,
			name: 'John Meower',
			position: 'Quarterback',
			school: 'UCLA',
			tags: ['Football', 'HS'],
			image: athlete1,
		},
		{
			id: 3,
			name: 'Edgar Allen Poe',
			position: 'Team Spirit',
			school: 'University of Sussex',
			tags: ['Basketball', 'College', 'MVP'],
			image: athlete2,
		},
		{
			id: 4,
			name: 'Jeremy Styles',
			position: 'Peak Rizzler',
			school: 'University of Jazz',
			tags: ['Football', 'HS', 'Star Player'],
			image: athlete3,
		},
	];

	// Filter athletes based on search query
	const filteredAthletes = athletes.filter(
		athlete =>
			athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			athlete.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
			athlete.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
			athlete.tags?.some(tag =>
				tag.toLowerCase().includes(searchQuery.toLowerCase()),
			),
	);

	return (
		<main className='Athletes-body'>
			<section className='Athletes-hero'>
				<div className='Athletes-info'>
					<h1>Our Elite Athletes</h1>
					<p>
						At Players Club Management, we take pride in representing a diverse
						roster of talented student-athletes. Our athletes are more than just
						competitors—they are leaders, influencers, and future business
						moguls.
					</p>
					<p>
						Discover the remarkable talents of our athletes who are redefining
						excellence in their sports. Each athlete embodies dedication, skill,
						and the pursuit of greatness.
					</p>
				</div>
			</section>

			<div className='Athletes-searchContainer'>
				<Icon className='Athletes-searchIcon' icon='tabler:search' />
				<input
					className='Athletes-search'
					name='search'
					type='text'
					placeholder='Search athletes...'
					autoComplete='off'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
			</div>

			{(filteredAthletes.length && <AthleteGrid athletes={filteredAthletes} />) || (
				<div className='Athletes-notFound'>
					<h2>No Athletes Found</h2>
					<p>Adjust your search terms and try again.</p>
				</div>
			)}
		</main>
	);
}
