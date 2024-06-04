import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './Electronics.css';

function Eloctronics(){
    const navigate = useNavigate();

    const [data,Setdata] = useState()
    useEffect(()=>{
        fetch(
            'https://dummyjson.com/products/'
        ).then(response=>response.json()).then(data=>Setdata(data))

    },[])
    console.log("data",data)
    return(
       <>
       <div className="container">
        
            {data && data?.products.map((item)=>(
                   <center>
                    <div>
                        <img src={item.thumbnail} alt="Clickable" className="myimg" onClick={function click(){
                            if(data != null){navigate(`/mobile/${item.id}`,{state :{data:item}})}
                         
                        }
                           
                        }/>

                        <p>{item.brand}</p>
                        <p>{item.price}</p>
                        <p>{item.cost}</p>
                        
                    </div>
                    </center>
                )
            )}
            </div>
        </>
    )
}


export default Eloctronics;