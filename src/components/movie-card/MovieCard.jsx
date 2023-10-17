import React, { useEffect, useState } from 'react'
import '../movie-card/moviecard.css'
const MovieCard = () => {


     const [data, Setdata]=useState();
    const Getmoviedata = async()=>{
       const result = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cc1e8edd46aa4208a340626a97884472");
        const actualdata= await result.json();
        console.log(actualdata.articles);
         Setdata(actualdata.articles);
    }
    
     useEffect(()=>{
         Getmoviedata();
     },[]);
      
  return (
    <div className='container my-5'>
       <div className="row">
         <div className="col-12">
            
                    <div className="card-header">
                         <h2 className='text-center'>Movie List</h2>
                    </div>

                     <div className="row">
                         

                           {
                            data?.map((value, index)=>{
                                return(
                                 <>
                                 <div className="col-12 col-md-4">
                                 <div className="card cus-movie-card" id={index}>
                                <div className="movie-img"> 
                                <img src={value.urlToImage} alt="" />
                                 </div>
                                 <div className="card-body">
                                     <p>  <strong>Title : </strong>{value.title}</p>
                                      <p> <strong>Date :</strong>  {value.publishedAt}</p> 
                                      <p>  <strong>
                                      Description  :
                                      </strong>  {value.description}</p>

                                 </div>
                            </div>
                            </div>

                                 </>

                                );
                            })
                           }
                            {/* <div className="card cus-movie-card">
                                <div className="movie-img"> 
                                <img src="https://flxt.tmsimg.com/assets/p20865424_p_v13_aa.jpg" alt="" />
                                 </div>
                                 <div className="card-body">
                                     <p>title</p>
                                     <p>Release Date:2222</p>
                                      <p> Description</p>

                                 </div>
                            </div> */}
                        
                     
             </div>

         </div>
       </div>
    </div>
  )
}

export default MovieCard;
