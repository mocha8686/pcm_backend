import { Link, NavLink } from 'react-router';
import './Navbar.css';
import logo from '$lib/assets/pcm_black_accent.jpg';
import type React from 'react';

export default function Navbar() {
	return (
		<nav className='Navbar'>
			<Link to='/' className='Navbar-logo'>
				<img
					src={logo}
					alt="Player's Club Management logo"
					className='Navbar-logoImage'
				/>
			</Link>

			<ul className='Navbar-links'>
				<NavbarItem to='/'>Home</NavbarItem>
				<NavbarItem to='/about'>About</NavbarItem>
				<NavbarItem to='/athletes'>Athletes</NavbarItem>
				<NavbarItem to='/contact'>Contact</NavbarItem>
				<NavbarItem to='/components'>Components</NavbarItem>
			</ul>
		</nav>
	);
}

interface NavbarItemProps {
	to: string;
}

function NavbarItem({
	to,
	children,
}: React.PropsWithChildren<NavbarItemProps>) {
	return (
		<li className='Navbar-item'>
			<NavLink to={to} className='Navbar-link'>
				{children}
			</NavLink>
		</li>
	);
}
