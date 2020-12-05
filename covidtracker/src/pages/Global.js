 import React, {useEffect, useState} from "react";
 import axios from "axios"
 import '../App.css'

 const Global = () => {
     const [confirmed, setConfirmed] = useState([]);
     const [deaths, setDeaths] = useState([]);
     const [recovered, setRecovered] = useState([]);
     useEffect(() => {
         axios 
         .get("https://covid19.mathdro.id/api")
         .then((response) =>

         {
             setConfirmed(response.data.confirmed.value);
             setDeaths(response.data.deaths.value);
             setRecovered(response.data.recovered.value);
         })
     }, []);

    
     return( 

        
         <div>
             <p><font color="DarkSlateGrey"><b>Jumlah kasus seluruh dunia</b></font></p>
             <h1 className ="box1">Positif {confirmed}</h1>
             <h1 className ="box2">Meninggal {deaths}</h1>
             <h1 className ="box3">Sembuh {recovered}</h1>
         </div>
         
     )
 }
 export default Global