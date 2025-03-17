import CallToAction from './CallToAction';
import './ContactForm.css';

export default function ContactForm() {
	return (
		<form className='ContactForm' action='/'>
			<h1 className='ContactForm-header'>Send Us a Message</h1>

			<label className='ContactForm-label' htmlFor='contactForm-name'>
				Name
			</label>
			<input
				className='ContactForm-input'
				type='text'
				name='name'
				id='contactForm-name'
				placeholder='John Doe'
			/>

			<label className='ContactForm-label' htmlFor='contactForm-email'>
				Email
			</label>
			<input
				className='ContactForm-input'
				type='email'
				name='email'
				id='contactForm-email'
				placeholder='person@example.com'
			/>

			<label className='ContactForm-label' htmlFor='contactForm-message'>
				Message
			</label>
			<textarea
				className='ContactForm-input ContactForm-input--textarea'
				name='message'
				id='contactForm-message'
				placeholder='Hello!'
				rows={6}
				cols={28}
			/>

			<CallToAction
				className='ContactForm-submit'
				ctaType='button'
				type='submit'
				icon='tabler:mail-fast'
			>
				Send Your Message
			</CallToAction>
		</form>
	);
}
