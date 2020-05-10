import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js'


const LocalHeadlines = ()=>{
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
            <div className="row">
                {
                    data.map( data=>(
                       <div className="col s12 m6 l6">
                            <div className="card">
                                <div className="card-image">
                                  <img  src={data.urlToImage} alt="headline image"></img>
                                  <span className="card-title">{data.title}</span>
                                </div>

                                <div className="card-content">
                                  <p>{data.description}</p>          
                                </div>

                                <div className="card-action">
                                    <p className="text-gray">  Published on {new Date(data.publishedAt).toDateString() }</p>
                                    <a className="" href={data.url}>Read full article</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

           
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
              <div className="row">
                  {
                        data.slice(0,5).map( data=>(
                           <div className="col s12 m6 l6">
                                <div className="card">
                                    <div className="card-image">
                                      <img  src={data.urlToImage} alt="headline image" ></img>
                                      <span className="card-title">{data.title}</span>
                                    </div>

                                    <div className="card-content">
                                        <p>{data.description}</p>
                                    </div>

                                    <div className="card-action">
                                        <p className="text-gray">  Published on {new Date(data.publishedAt).toDateString() }</p>
                                        <a className="" href={data.url}>Read full article</a>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
              </div>  

        </div>
    )
}

const Headlines = () =>{

    const [news , setNews] = useState('local');


    useEffect( ()=>{
       document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });
    }, [] );

    const handleChange = (event) =>{
        setNews(event.target.value);
    }

    return(
        <div>
            <div className="container">
                
                  <div class="row">

                    <div class="col s12 m12 l12">
                        {
                            news == "local" ? (
                             <div class="card green">
                                <div class="card-content white-text">
                                  South african Covid19 News
                                </div>
                                
                              </div> 
                            ): (
                               <div class="card blue">
                                <div class="card-content white-text">
                                  International Covid19 News
                                </div>
                                
                              </div>  
                            )
                        }
                     
                    </div>
                  </div>

                <div className="row">
                     <div className="input-field col s12">
                        <select onChange={handleChange} value={news}>
                          <option value="" disabled>Choose your option</option>
                          <option value="local">Local</option>
                          <option value="global">Global</option>
                        </select>
                        <label>Local or Global Covid19 Headlines</label>
                      </div>
                </div> 


                <div className="row">
                   {news == 'local' ?
                    <LocalHeadlines></LocalHeadlines>
                    :
                    <GlobalHeadlines></GlobalHeadlines>
                    } 
                </div>
                

             </div>   
        </div>
    )
}



export default Headlines;






