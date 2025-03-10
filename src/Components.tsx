import './Components.css';
import CallToAction from '$lib/components/CallToAction';
import { Link } from 'react-router';

export default function Components() {
	return (
		<>
			<CallToAction to='#' className='test' icon='tabler:mail-fast'>
				Contact Us
			</CallToAction>
			<Link to="/">Go to home</Link>
		</>
	)
}
