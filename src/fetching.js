import axios from "axios";

export const getDrones = ( searchQuery, selectedCategory, sortByPrice ) => {
    return axios.get("http://localhost:3001/read", {params: { searchQuery, selectedCategory, sortByPrice } })
}