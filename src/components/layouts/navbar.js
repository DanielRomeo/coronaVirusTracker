import React from 'react';
import 'react-router-dom';
import { Link } from 'react-router-dom';

//import M from 'materialize-css/dist/js/materialize.min.js'

function Navbar(){


    const navbarstyles={
        background: "balck",
       	color: "white"
    }

    return (
        <div  className="App">

         
			<nav>
				<div style={navbarstyles} class="nav-wrapper">
					<div className="container">
						<a href="#" class="brand-logo">Coronavirus Stats Tracker</a>
						<ul id="nav-mobile" class="right hide-on-med-and-down">

							<li>
								<Link to="./SouthAfrica">
									South Africa
								</Link>
							</li>

							

							<li>
								<Link to="/">
									Home
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






























