import React,{useEffect} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js'

const ProvincesData = ()=>{

	// const [mydata, setData] = useState('');

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
	
    return(    	 
		<div>
				

		  <label>Select Province</label>
		  <select class="browser-default">
		    <option value="" disabled selected>Choose your option</option>
		    <option value="LP">Limpopo</option>
		    <option value="GP">Gauteng</option>
		    <option value="WC">Western Cape</option>
		    <option value="FS">Northern Cape</option>
		    <option value="EC">Eastern Cape</option>
		    <option value="MP">Mpumalanga</option>
		    <option value="NW">North West</option>
		    <option value="FS">Free State</option>
		    <option value="KZN">Kwa-Zulu Natal</option>
		  </select>

		  <br />

		  

	    </div>  
    )
}



export default ProvincesData;






