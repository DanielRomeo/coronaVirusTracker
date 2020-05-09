import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({ data : {confirmed, recovered, deaths, lastUpdate } }) =>{


	if(!confirmed){
		return 'Loading...';
	}

	return (
		<div className={styles.container}>
			<div className="container">
				
				<div className="row">

					<div className="col s12 m4 l4">
						<div className="card blue-grey darken-1 hoverable">
							<div className="card-content white-text">
								<span className="card-title">Confirmed Infections</span>
								<CountUp start={0} end={confirmed.value} separator={','} ></CountUp>
								<p> as of : {new Date(lastUpdate).toDateString() }</p>
							</div>

							<div className="card-action">
								
							</div>
						</div>
					</div>

					<div className="col s12 m4 l4">
						<div className="card blue-grey darken-1 hoverable">
							<div className="card-content white-text">
								<span className="card-title">Recoveries</span>
								<CountUp start={0} end={recovered.value} separator={','} ></CountUp>
								<p> as of : {new Date(lastUpdate).toDateString() }</p>
							</div>

							<div className="card-action">
								
							</div>
						</div>
					</div>

					<div className="col s12 m4 l4">
						<div className="card blue-grey darken-1 hoverable">
							<div className="card-content white-text">
								<span className="card-title">Deaths</span>
								<CountUp start={0} end={deaths.value} separator={','} ></CountUp>
								<p> as of : {new Date(lastUpdate).toDateString() }</p>
							</div>

							<div className="card-action">
								
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Cards;