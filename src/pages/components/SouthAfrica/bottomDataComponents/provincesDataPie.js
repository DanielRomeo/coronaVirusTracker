import React,{useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

import M from 'materialize-css/dist/js/materialize.min.js'

const ProvincesData = ()=>{

	const [mydata, setData] = useState('asas');
	useEffect( ()=>{
		
		/*const fetchApi = async() =>{
            setData(await fetchData());
        }

        fetchApi();*/
		M.AutoInit();
	}, []);

    /*const fetchData = async () =>{

        //const url = 'https://corona-stats.mobi/api/json.2.0.php?key=G8KViplEJ0NdFPbfZ7ID';

        try {
            const { data } = await axios.get(url);
            return [data.confirmed.value, data.recovered.value, data.deaths.value];
        }catch(error){
            console.log('Error, Couldnt fetch the data...');
        }
    }*/

    const myDougnutGraph = (
        mydata.length ? (
            <Doughnut
                data={{
                   labels: [
						'Red',
						'Green',
						'Yellow'
					],
					datasets: [{
						data: [300, 50, 100],
						backgroundColor: [
						'#FF6384',
						'#36A2EB',
						'#FFCE56'
						],
						hoverBackgroundColor: [
						'#FF6384',
						'#36A2EB',
						'#FFCE56'
						]
					}]
                }}
                
            >   
            </Doughnut>
        ): null
    )
	
    return(    	 
		<div>
				

			{myDougnutGraph}
		  

	    </div>  
    )
}



export default ProvincesData;






