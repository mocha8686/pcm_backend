import './Home.css';
import Footer from '$lib/components/Footer';
import Hero from '$lib/components/Hero';
import Navbar from '$lib/components/Navbar';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import AthleteCarousel, {
	CarouselAthlete,
} from '$lib/components/AthleteCarousel';
import type { Athlete } from '$lib/components/AthleteCard';
import amos from '$lib/assets/amos-aguilera.webp';

export default function Home() {
	const [showNav, setShowNav] = useState(false);
	const heroRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const callback: IntersectionObserverCallback = entries => {
			for (const entry of entries) {
				setShowNav(!entry.isIntersecting);
			}
		};

		const observer = new IntersectionObserver(callback, {
			threshold: 0.45,
		});

		if (heroRef.current) {
			observer.observe(heroRef.current);
		}
	});

	// TODO: get athletes from django
	const athletes: CarouselAthlete[] = [...Array(16)].map((_, i) => ({
		id: i,
		name: 'Amos Aguilera',
		position: '1B',
		school: 'Jurupa Hills High School',
		image: amos,
		tags: ['Baseball', 'NIL', 'Multi-Sport'],
	}));

	return (
		<>
			<Hero ref={heroRef} id='hero' />
			<Navbar className={clsx('Home-navbar', showNav && 'is-visible')} />
			<AthleteCarousel athletes={athletes} />
			<Footer />
		</>
	);
}
