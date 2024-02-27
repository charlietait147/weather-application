import axios from "axios";


export const getWeatherDataService = async (searchBarText) => {
    try{
        if (!searchBarText) {
            throw new Error("No search bar text");
        }
    const res = await axios.get(`${process.env.API_URL}?q=${searchBarText}&appid=${process.env.API_KEY}`
    );
    return res.data;
    }
    catch (error){
        return error.message;
    }
}

// ${import.meta.import.env.VITE_API_KEY}
