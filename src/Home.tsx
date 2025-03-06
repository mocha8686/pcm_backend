import './Home.css';
import Button from './components/Button.tsx';

export default function Home() {
	return (
		<>
			<h1>Hello, world!</h1>
			<Button className='test' type='button' icon='tabler:mail-fast'>
				Contact Us
			</Button>
		</>
	);
}
