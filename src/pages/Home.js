import React from 'react';
import { Link } from 'react-router-dom';

// import {Cards, Chart, CountryPicker } from './components';
import Cards from './components/Cards/Cards.js';
import Chart from './components/Chart/Chart.js';
// import CountryPicker from './components/CountryPicker/CountryPicker.js';

import Navbar from '../components/layouts/navbar.js';
import styles from './Home.module.css';
import fetchData  from './api/index.js';


class Home extends React.Component{

	state ={
		data: {}
	}

	async componentDidMount(){
		const returnedData = await fetchData();

		this.setState({
			data: returnedData
		});
	}

	render(){
		const { data } = this.state;

		return(
			<div className="styles.container">
				<Navbar></Navbar>
				<br />

				<Cards data={data}></Cards>
				
				<Chart ></Chart>
			</div>
		)
	}
}


export default Home;






