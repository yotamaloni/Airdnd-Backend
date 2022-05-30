const axios = require("axios");
const API_KEYS = require("../../APIs KEY/API_KEYs");
const fs = require("fs");
const data = require("../../data");

async function locationQuery(URL) {
  try {
    const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=TEL&types=geocode&key=${API_KEYS.googlePlace}`;
    const response = await axios.get(URL);
    // const locations = response.data.predictions.map((currLocation) => {
    //   const location = {};
    //   location.description = currLocation.description;
    //   location._id = currLocation.place_id;
    //   location.city = currLocation.structured_formatting.main_text;
    //   location.country = currLocation.structured_formatting.secondary_text;
    //   return location;
    // });
    let locations = data.locations;
    return locations;
  } catch (err) {
    console.log("Failed to get locations", err);
    res.status(500).send({ err: "Failed to get locations" });
  }
}

module.exports = {
  locationQuery,
};
