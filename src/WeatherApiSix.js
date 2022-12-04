import { useState,useEffect } from "react";
import axios from "axios";

function WeatherApiSix(){
    const cityArray = ["nagpur","pune","mumbai","hyderabad","nasik","delhi"]
    const [allData,setAllData] = useState()

    useEffect(()=>{
        let cityData = [];
        cityArray.map((cityname)=>{
            axios.get("http://api.weatherapi.com/v1/current.json?key=c2127b2d2e8046589d8111559220112&q="+cityname+"&aqi=no").then((response)=>{
            // console.log("Response:",response.data)
            cityData.push(response.data)
            setAllData([...cityData])           
        })
        })
    },[])
    return(
        <>
          This is Weather.
          {allData && allData.map(function (elem,index){
            return <h1>{elem.current.temp_c}<sup>o</sup>{elem.location.name}</h1> 
        }
        )}  
        </>    
    )
}
export default WeatherApiSix;