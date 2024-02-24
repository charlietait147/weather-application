import axios from "axios";


export const getWeatherDataService = async () => {
    try{
    const res = await axios.get("http://localhost:3000/dublin");
    return res.data;
    }
    catch (error){
        return error;
    }
}

console.log(getWeatherDataService());