import React  from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/layouts/navbar.js';
import LatestConfirmedCases from './components/SouthAfrica/LatestConfirmedCases.js';
import TopData from './components/SouthAfrica/TopData.js';
import BottomData from './components/SouthAfrica/BottomData.js';
// import axios from 'axios';


const SouthAfrica = ()=>{

	
    return(
    	<div>
	    	<Navbar></Navbar>

	    	
	    		<TopData></TopData>

	    		<div></div>

	    		<LatestConfirmedCases></LatestConfirmedCases>
				
				<br />
	    </div>  
    )
}



export default SouthAfrica;






