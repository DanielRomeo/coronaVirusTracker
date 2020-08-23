import React from 'react';
import 'react-router-dom';
import { Link } from 'react-router-dom';

//import M from 'materialize-css/dist/js/materialize.min.js'

function Navbar(){


    const navbarstyles={
        background: "black",
       	color: "white"
    }

    return (
        <div  className="App">

         
			<nav>
				<div style={navbarstyles} className="nav-wrapper">
					<div className="container">
						<Link to="/"> <a className="brand-logo">Coronavirus Stats Tracker</a> </Link>
						<ul id="nav-mobile" className="right hide-on-med-and-down">

							<li className="hoverable">
								<Link to="./SouthAfrica">
									South Africa
								</Link>
							</li>

							

							<li>
								<Link to="/">
									Home
								</Link>
							</li>

							 <li>
							 	<Link to="./News">
							 		News
							 	</Link>
							 </li>
							
						</ul>	
					</div>
					
				</div>
			</nav>



        </div>

    )
}


export default Navbar;






























