exports.makeGetRequest = async (url) =>{
    const options = {
      method: "GET", 
      url: url,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    }
}