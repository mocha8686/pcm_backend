import './Home.css';
import Footer from '$lib/components/Footer';
import Hero from './lib/components/Hero';
import Navbar from './lib/components/Navbar';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

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

	return (
		<>
			<Hero ref={heroRef} id='hero' />
			<Navbar className={clsx('Home-navbar', showNav && 'is-visible')} />
			<Footer />
		</>
	);
}
