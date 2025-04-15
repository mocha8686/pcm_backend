import './Contact.css';
import ContactForm from '$lib/components/ContactForm';
import { ContactInfoItem } from '$lib/components/ContactInfo';

export default function Contact() {
	return (
		<main className='Contact-body'>
			<div className='Contact-info'>
				<h1>Get In Touch With Our Professional Team</h1>

				<p>Have questions or want to work with us? Reach out today!</p>
				<p>
					Fill out the form and our team will get back to you as soon as
					possible.
				</p>
				<p>
					Don’t want to use our form? No worries! Feel free to reach out through
					our email or make a call.
				</p>

				<div className='Contact-links'>
					<ContactInfoItem
						icon='tabler:mail'
						text='playersclubmgmtsjz@gmail.com'
						to='mailto:playersclubmgmtsjz@gmail.com'
					/>
					<ContactInfoItem
						icon='tabler:phone'
						text='(909) 232-2422'
						to='tel:+1(909)232-2422'
					/>
				</div>
			</div>

			<ContactForm />
		</main>
	);
}
