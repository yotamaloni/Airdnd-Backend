const httpRequestService = require("./httpRequest.service");

async function getLocations(req, res) {
  try {
    const locations = await httpRequestService.locationQuery();
    res.json(locations);
  } catch (err) {
    console.log(("Failed to update board", err));
    res.status(500).send({ err: "Failed to get locations" });
  }
}

module.exports = {
  getLocations,
};
