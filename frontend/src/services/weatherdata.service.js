import axios from "axios";


export const getWeatherDataService = async (searchBarText) => {
    try{
        // if (!searchBarText) {
        //     throw new Error("No search bar text");
        // }

        let apiUrl;
        if (process.env.NODE_ENV === "production") {
            apiUrl = (`${process.env.PRODUCTION_API_URL}?q=${searchBarText}&appid=${process.env.API_KEY}`);
        } else {
            apiUrl = process.env.DEVELOPMENT_API_URL;
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

