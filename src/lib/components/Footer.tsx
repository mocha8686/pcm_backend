import './Footer.css';
import logo from '$lib/assets/pcm_white_accent.jpg';
import { Link } from 'react-router';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import FooterNav from './FooterNav';

export default function Footer() {
	return (
		<>
			<footer className='Footer'>
				<hr className='Footer-hr' />
				<section className='Footer-content'>
					<Link to='/' className='Footer-logo'>
						<img
							src={logo}
							alt="Player's Club Management logo"
							className='Footer-logoImage'
						/>
					</Link>

					<ContactForm />

					<ContactInfo />

					<FooterNav />
				</section>
			</footer>
		</>
	);
}
