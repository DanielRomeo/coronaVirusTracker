import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Bar from 'react-chartjs-2';

const LatestConfirmedCases = ()=>{

	const [data, setData] = useState([]);

	useEffect( () =>{
		const fetchApi = async() =>{
			setData(await fetchData());
		}
		fetchApi();
	}, []);


	const fetchData = async () =>{

		// gest total number of confirmed cases from  aperiod to a period
		const url = 'https://api.covid19api.com/total/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';

		try {
			const { data } = await axios.get(url);
			console.log(data);
			return data;
		}catch(error){
			console.log('Error, COuldnt fetch the data...');
		}
	}


    return(
    	<div className="container">

    		<div className="row">
    			
    			<div className="col s12 m12 l12">

    				<Bar
    					data={{
    						labels: data.map(data=> data.Date),
					        datasets: [{
					            label: 'My First dataset',
					            backgroundColor: 'rgb(255, 99, 132)',
					            borderColor: 'rgb(255, 99, 132)',
					            data: data.map( data=> (data.Cases) )
					        }]
    					}}
						  width={200}
						  height={200}
						  options={{ maintainAspectRatio: false }}
    				>	
    				</Bar>
    			</div>
	    	</div>
			
	    </div>  
    )
}



export default LatestConfirmedCases;






