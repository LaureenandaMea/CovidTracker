import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import NumberFormat from "react-number-format"

export default function Provinsi (){
    const [provinsiData, getProvinsi] = useState([]);
    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then(response => {getProvinsi(response.data.data)})
            .catch(err => {console.log(err)})
    }, []);
    console.log(provinsiData)
    return(
        <div align="center">
            <p><font color="DarkSlateGrey"><b>Jumlah Kasus Provinsi</b></font></p>
            <table border="1" className="tabel-dasar">
                <tr>
                    <th className="table-nomor">Nomor</th>
                    <th className="table-profinsi">Provinsi</th>
                    <th className="table-positif">Positif</th>
                    <th className="table-sembuh">Sembuh</th>
                    <th className="table-meninggal">Meninggal</th>
                </tr>
                {provinsiData.map((item, index) => {
                    return(
                        <tr>
                            <th className="table-nomor"scope="row" key={item.fid}>{index + 1}</th>
                            <th className="table-profinsi">{item.provinsi}</th>
                            <th className="table-positif"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-sembuh"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-meninggal"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                        </tr>
                    )
                })}
            </table>
        </div>    
    )
}