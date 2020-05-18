import React,{useEffect} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';
import ProvincesData from './bottomDataComponents/provincesData.js';
import ProvincesDataPie from './bottomDataComponents/provincesDataPie.js';

const BottomData = ()=>{

	useEffect( ()=>{
		 M.AutoInit();
	}, []);
	
    return(
    	<div className="container">
    	  <div className="card">
		    <div className="card-content">
		      <p>Use these three bars to navigate between pages.</p>
		    </div>
		    <div className="card-tabs">
		      <ul className="tabs tabs-fixed-width">
		        <li className="tab"><a href="#test4">Provinces Stats</a></li>
		        <li className="tab"><a className="active" href="#test5">Test 2</a></li>
		        <li className="tab"><a href="#test6">Test 3</a></li>
		      </ul>
		    </div>
		    <div className="card-content grey lighten-4">
		      <div id="test4">
		      	<ProvincesData></ProvincesData>
		      </div>
		      <div id="test5">
		      	<ProvincesDataPie></ProvincesDataPie>
		      </div>
		      <div id="test6">Test 3</div>
		    </div>
		  </div>
			
	    </div>  
    )
}



export default BottomData;






