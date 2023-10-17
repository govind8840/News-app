import React, { useState } from "react";
import { useEffect } from "react";
import '../components/coviddata.css'

const Covidreport = () => {
     const [movie, Setmovie]=useState();

    const Getdata = async ()=>{
        const res = await fetch("https://www.omdbapi.com/?s=harry&type=movie&apikey=c8dc638a");
         const alldata = await res.json();
         console.log(alldata)
          Setmovie(alldata.Search );
    }
    // console.log("govind",alldata); 

     useEffect (()=>{
       Getdata();
     },[]);

  return (
    <div className="container  my-5">
      <h1 className="text-center">Covid case</h1>
      <div className="row">
        <div className="col-12">
          <div className="card shadow border-0">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Poster</th>
                    <th scope="col">Release Year</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {Case.map((value,index)=>{
                         return(
                          <tr>
                          <th scope="row">{index}</th>
                          <td>{value.date}</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                         )
                     
                   })} */}
                    {
                      movie?.map((value,index)=>{
                          return(
                            <>
                       <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{value.Title}</td>
                          <td><img src={value.Poster} className="imgposter img-fluid" alt="" /></td>
                          <td>{value.Year}</td>
                        </tr>
                            </>
                          );
                      })
                    }
                        
                     
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covidreport;
