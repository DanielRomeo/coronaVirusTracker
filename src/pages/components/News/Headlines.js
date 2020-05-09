import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const Headlines = ()=>{

	const [data, setData] = useState([]);

    useEffect( () =>{
        const fetchApi = async() =>{
            setData(await fetchData());
        }
        fetchApi();
    }, []);


    const fetchData = async () =>{

        // get the headlines -> southafrica -> about coronavirus: 
        const url = 'https://newsapi.org/v2/top-headlines?q=coronavirus&country=za&apiKey=dbf3a647100448a5a9c6d1783e88bc2f';

        try {
            const { data } = await axios.get(url);
            console.log(data);
            return data;
        }catch(error){
            console.log(`Error, couldn't fetch the data... `);
        }
    }

    return(
    	<div>

            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l12">

                                           
                    </div>
                </div>
            </div>
	    </div>  
    )
}



export default Headlines;






