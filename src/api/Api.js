const API_KEY = "2ae2803f-d169-49f2-8d96-c1295dff49fa";

// All the upcoming matches

export const getMatches=()=>{
    const url =`https://api.cricapi.com/v1/cricScore?apikey=2ae2803f-d169-49f2-8d96-c1295dff49fa`;

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("Error :", error));
};

// Load match detailes

export const getMatchDetail = (id) =>{
    const url =`https://api.cricapi.com/v1/cricScore?apikey=2ae2803f-d169-49f2-8d96-c1295dff49fa&id=${id}`;

    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}