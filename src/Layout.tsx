import { Outlet } from 'react-router';
import './Layout.css';

export default function Layout() {
	return (
		<>
			<nav>Hi</nav>
			<Outlet />
		</>
	);
}
