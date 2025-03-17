import { Link } from 'react-router';
import { useState } from 'react';

export default function Home() {
	const [thing, setThing] = useState('world');

	return (
		<>
			<h1>Hello, {thing}!</h1>
			<input
				type='text'
				value={thing}
				onChange={e => setThing(e.target.value)}
			/>
			<Link to='/components'>Go to components</Link>
		</>
	);
}
