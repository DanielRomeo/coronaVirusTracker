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
            return data.articles;
        }catch(error){
            console.log(`Error, couldn't fetch the data... `);
        }
    }

    return(
    	<div>

            <div className="container">

                <div class="row">
                    <div class="col s12 m12 l12">
                      <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                          <span class="card-title">LOCAL HEADLINES (COVID 19)</span>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="row">
                   
                    {
                        data.map( data=>(
                           <div className="col s12 m6 l6">
                                <div class="card">
                                    <div class="card-image">
                                      <img src={data.urlToImage}></img>
                                      <span class="card-title">{data.title}</span>
                                    </div>

                                    <div class="card-content">
                                      <p>{data.description}</p>

                                    
                                    </div>

                                    <div class="card-action">
                                        <p className="text-gray">  Published on {new Date(data.publishedAt).toDateString() }</p>
                                        <a className="" href={data.url}>Read full article</a>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                                           
                
                </div>
            </div>

            <GlobalHeadlines></GlobalHeadlines>
	    </div>  
    )
}

export const GlobalHeadlines = () =>{

    const [data, setData] = useState([]);

    useEffect( () =>{
        const fetchApi = async() =>{
            setData(await fetchData());
        }
        fetchApi();
    }, []);


    const fetchData = async () =>{

        // get the headlines -> global -> about coronavirus: 
        const url = 'https://newsapi.org/v2/top-headlines?q=coronavirus&sources?language=en&apiKey=dbf3a647100448a5a9c6d1783e88bc2f';

        try {
            const { data } = await axios.get(url);
            console.log(data);
            return data.articles;
        }catch(error){
            console.log(`Error, couldn't fetch the data... `);
        }
    }

    return(
        <div>
                
          <div className="container">

          <div class="row">
                <div class="col s12 m12 l12">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">LOCAL HEADLINES (COVID 19)</span>
                    </div>
                  </div>
                </div>
            </div>


              <div className="row">
                  {
                        data.slice(0,5).map( data=>(
                           <div className="col s12 m6 l6">
                                <div class="card">
                                    <div class="card-image">
                                      <img src={data.urlToImage}></img>
                                      <span class="card-title">{data.title}</span>
                                    </div>

                                    <div class="card-content">
                                        <p>{data.description}</p>
                                    </div>

                                    <div class="card-action">
                                        <p className="text-gray">  Published on {new Date(data.publishedAt).toDateString() }</p>
                                        <a className="" href={data.url}>Read full article</a>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
              </div>
          </div>          

        </div>
    )
}



export default Headlines;






