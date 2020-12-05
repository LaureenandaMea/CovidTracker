import React, {useEffect, useState} from "react";
 import axios from "axios"
 import '../App.css'

 const Indonesia = () => {
     const [perawatan, setPerawatan] = useState([]);
     const [meninggal, setMeninggal] = useState([]);
     const [sembuh, setSembuh] = useState([]);
     useEffect(() => {
         axios 
         .get("https://indonesia-covid-19.mathdro.id/api")
         .then((response) =>

         {
             setPerawatan(response.data.perawatan);
             setMeninggal(response.data.meninggal);
             setSembuh(response.data.sembuh);
         })
     }, []);

    
     return( 

        
         <div>
             <p><font color="DarkSlateGrey"><b>Jumlah Kasus Seluruh Indonesia</b></font></p>
             <h1 className ="box1">Positif {perawatan}</h1>
             <h1 className ="box2">Meninggal {meninggal}</h1>
             <h1 className ="box3">Sembuh {sembuh}</h1>
         </div>
     )
 }
 export default Indonesia;