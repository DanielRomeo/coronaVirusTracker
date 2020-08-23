import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import styles from '../Cards/Cards.module.css';

const TopData = ()=>{

	const [mydata, setData] = useState('');

    useEffect( () =>{
        const fetchApi = async() =>{
            setData(await fetchData());
        }
        fetchApi();
    }, []);


    const fetchData = async () =>{

        //get south africa recoverd, deaths and confirmed:
        const url = 'https://covid19.mathdro.id/api/countries/ZA';

        try {
            const { data } = await axios.get(url);
            //console.log(data);
            return [data.confirmed.value, data.recovered.value, data.deaths.value];
        }catch(error){
            console.log('Error, Couldnt fetch the data...');
        }
    }

    // console.log(data);
    // console.log(data.confirmed.value);


    const myBarGraph = (
        mydata.length ? (
            <Bar
                data={{
                    labels: ["confirmed", "recoveries", "deaths"],
                    datasets: [{
                        label: 'Cases/Recoveries and Deaths',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [mydata[0], mydata[1], mydata[2]],
                         backgroundColor: [
                            'rgba(45, 45, 230, 0.5)',
                            'rgba(45, 230, 45, 0.5)',
                            'rgba(230, 45, 45, 0.5)'
                        ],
                          borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                    }]
                }}
                  width={200}
                  height={300}
                  options={{ maintainAspectRatio: false, }}
            >   
            </Bar>
        ): null
    )
    

    return(
    	<div className="container">

            <div class="row">
                <div class="col s12 m12 l12">
                    <div className="col s12 m4 l4">
                        <div className="card blue-grey darken-1 hoverable">
                            <div className="card-content white-text">
                                <span className="card-title">Recovery Rate</span>
                                
                                   <h3>{Math.ceil( (mydata[1]/mydata[0])*100 )}%</h3>
                                    
                            </div>

                            <div className="card-action">
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

    		<div className="row">
    			
    			<div className="col s12 m12 l12">

                    
                {myBarGraph}
    			
    			</div>
	    	</div>
			
	    </div>  
    )
}



export default TopData;






