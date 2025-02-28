import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './Header/Header.tsx'
import Table from './Table/Table.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header />
		<App />
		<Table />
	</StrictMode>
)
