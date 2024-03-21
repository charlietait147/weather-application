import axios from "axios";

export const getWeatherDataService = async (searchBarText) => {
    try{
    
        let apiUrl;
        if (import.meta.env.MODE === "production") {
            apiUrl = (`${import.meta.env.VITE_APP_PRODUCTION_API_URL}?q=${searchBarText}&appid=${process.env.API_KEY}`);
        } else {
            apiUrl = import.meta.env.VITE_APP_DEVELOPMENT_API_URL;
        }
        
        // Testing purposes to ensure the correct URL is being called
        if (apiUrl === import.meta.env.VITE_APP_DEVELOPMENT_API_URL) {
            apiUrl = `http://localhost:3000/dublin`;
        }
    
    // const res = await axios.get(`${process.env.API_URL}?q=${searchBarText}&appid=${process.env.API_KEY}`
    // );

    const res = await axios.get(apiUrl);
    return res.data;
    }
    catch (error){
        return error.message;
    }
}

