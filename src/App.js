import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LocationPage from './components/LocationPage';
import MainContent from './components/MainContent';
import { StyledApp } from './styles/App.style';
import { Global } from './styles/Global';
import { searchNames } from './utils/searchNames';

// TODO: refactor to TypeScript

function App() {
	const [data, setData] = useState();
	const [name, setName] = useState('');
	const matchedName = searchNames(data, name);

	useEffect(() => {
		fetch('http://localhost:9000/')
			.then((res) => res.json())
			.then(({ locations }) => {
				setData(locations);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<Global />
			<StyledApp>
				<Header />
				<Routes>
					<Route
						path='/'
						element={
							<MainContent
								data={data}
								name={name}
								setName={setName}
								matchedName={matchedName}
							/>
						}
					/>
					<Route
						path='/location/:consumerId'
						element={<LocationPage data={data} setData={setData} />}
					/>
				</Routes>
				<Footer />
			</StyledApp>
		</>
	);
}

export default App;
