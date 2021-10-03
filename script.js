
 function findtime()
{
    
    let sr=document.getElementById("sr");
    let ss=document.getElementById("ss");
     let dl=document.getElementById("dl");
    let lat=document.getElementById("lat").value;
    let long=document.getElementById("long").value;
    let day=document.getElementById("day").value;
    console.log(day)
    console.log(lat);
    console.log(long);
 fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${-long}&date=${day}`)
.then((response)=> {
    console.log(response);
    return response.json();
}) .then((data)=>{
    console.log(data.results);
    console.log(data.results.sunrise);
    console.log(data.results.sunset);
     console.log(data.results.day_length);
    sr.innerHTML=data.results.sunrise;
    ss.innerHTML=data.results.sunset;
     dl.innerHTML=data.results.day_length;

})
 .catch((error)=>console.log("not fetch"));
    

}




