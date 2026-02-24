export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.NS_API_KEY
        }
      }
    );



    const data = await response.json();


    const simplified = data.payload.map(station => ({
    name: station.namen.lang,
    lat: station.lat,
    lng: station.lng,
    UICCode: station.code || station.UICCode
}));


    res.status(200).json(simplified); //simplified wordt hier in een parameter geplaatst. 
    //als je res.json({ simplified }); doet, gebruik je data.simplified in frontend.


  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
