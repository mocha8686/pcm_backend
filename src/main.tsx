import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'normalize.css/normalize.css';
import Home from './Home.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { setupFetch } from './fetch.ts';

// TODO: get url from .env.development or .env.production
setupFetch(fetch, 'http://localhost:8000');

const root = document.getElementById('root');

if (root) {
	createRoot(root).render(
		<StrictMode>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</BrowserRouter>
		</StrictMode>,
	);
} else {
	console.error('Failed to find root element.');
}
