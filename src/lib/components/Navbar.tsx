import { Link, NavLink } from 'react-router';
import './Navbar.css';
import logo from '$lib/assets/pcm_black_accent.jpg';

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
				<li className='Navbar-item'>
					<NavLink to='/' className='Navbar-link'>
						Home
					</NavLink>
				</li>
				<li className='Navbar-item'>
					<NavLink to='/about' className='Navbar-link'>
						About
					</NavLink>
				</li>
				<li className='Navbar-item'>
					<NavLink to='/athletes' className='Navbar-link'>
						Athletes
					</NavLink>
				</li>
				<li className='Navbar-item'>
					<NavLink to='/contact' className='Navbar-link'>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
