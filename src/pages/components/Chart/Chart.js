import React, {useState, useEffect} from 'react';
import styles from './Chart.module.css';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';


const Chart = () =>{
	const [dailyData, setDailyData] = useState([]);

	useEffect( () =>{
		const fetchApi = async() =>{
			setDailyData(await fetchDailyData());
		}
		fetchApi();
	}, []);

	const lineChart = (
		// if the data exists:
		dailyData.length ?
		(
			<Line data= {{
				labels: dailyData.map(  ({date})  => date),
				
				datasets: [{
					data: dailyData.map(({confirmed})=> confirmed),
					label: "Infected", 
					borderColor: "#333ff",
					fill: true
				},
				{
					data: dailyData.map(({deaths})=> deaths),
					label: "Deaths", 
					borderColor: "red",
					backgroundColor: "rgba(255, 0, 0, 0.5)",
					fill: true	
				} ]
			}} >
			</Line>
		): null
		
	);


	return (
		<div className={styles.container}>
			<div className="container">
				
				{lineChart}
			</div>
		</div>

	)
}

export default Chart;