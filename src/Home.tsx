import './Home.css';
import CallToAction from '$lib/components/CallToAction';

export default function Home() {
	return (
		<>
			<h1>Hello, world!</h1>
			<CallToAction href='#' className='test' icon='tabler:mail-fast'>
				Contact Us
			</CallToAction>
		</>
	);
}
