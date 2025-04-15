import ContactForm from '$lib/components/ContactForm';
import Icon from '$lib/components/Icon';

export default function Contact() {
	return (
		<>
			<h1 style={{ paddingLeft: '2rem', paddingTop: '2rem' }}>Contact Us</h1>
			<section
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					alignItems: 'start',
					gap: '4rem',
					padding: '2rem',
					maxWidth: '1200px',
					marginInline: 'auto',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
						gap: '1rem',
						maxWidth: '500px',
						margin: '0 auto',
					}}
				>
					<h2
						style={{
							fontSize: '1.75rem',
							color: 'var(--cl-accent)',
							fontFamily: 'var(--ff-header)',
							fontWeight: 'bold',
						}}
					>
						Get In Touch With Our Professional Team
					</h2>

					<p>Have questions or want to work with us? Reach out today!</p>
					<p>
						Fill out the form and our team will get back to you as soon as
						possible.
					</p>
					<p>
						Don’t want to use our form? No worries! Feel free to reach out
						through our email or make a call.
					</p>

					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '0.5rem',
							}}
						>
							<Icon icon='tabler:mail' className='ContactInfo-logo' />
							<span>playersclubmgmtsjz@gmail.com</span>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '0.5rem',
							}}
						>
							<Icon icon='tabler:phone' className='ContactInfo-logo' />
							<span>(909) 232-2422</span>
						</div>
					</div>
				</div>

				<ContactForm />
			</section>
		</>
	);
}
