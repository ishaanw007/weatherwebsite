const sumbitBtn = document.getElementById("sumbitBtn");
const cityName = document.getElementById("cityName");
const city_name= document.getElementById("city_name")
const temp_status= document.getElementById("temp_status")
const temp= document.getElementById("temp")
const datahide = document.querySelector('.middle_layer')
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal==="") {
        city_name.innerText='Plz write the name';
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6c41d1a00d7f48d5605aeb4766e03418`
            const response=await fetch(url);
            const data=await response.json();
            console.log(data)
            const arrData =[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
            temp.innerText=arrData[0].main.temp;
            temp_status.innerText=arrData[0].weather[0].main;
            datahide.classList.remove('data_hide');
        } catch  {
            datahide.classList.add('data_hide');
        }
       

    }
}

sumbitBtn.addEventListener('click', getInfo)