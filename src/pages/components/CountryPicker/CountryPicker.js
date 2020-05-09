import React, {useState, useEffect} from 'react';
import styles from './CountryPicker.module.css';



const CountryPicker = () =>{
	// let M = window.M;

	useEffect( ()=>{
		   //M.AutoInit();
	}, []);

	return (
		<div className={styles.container}>
			<div className="container">
				
			<div className="row">
				<form>
					 <div class="input-field col s12">
					    <select className="tabs">
							<option value="" disabled selected>Choose your option</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
					    </select>

					    <label>Materialize Select</label>
					  </div>
				</form>
			</div>
			
			</div>
		</div>
	)
}

export default CountryPicker;