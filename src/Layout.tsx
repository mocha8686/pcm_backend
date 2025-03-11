import { Outlet } from 'react-router';
import './Layout.css';
import Navbar from '$lib/components/Navbar';

export default function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
