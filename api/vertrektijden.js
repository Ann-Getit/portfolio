export default async function handler(req, res) {
  try {
    const { station } = req.query; //pakt elke station naam uit elk URL data
    console.log(station);
    //als er geen stations zijn je krijg error. return zorgt eroor dat het niet meer actief blijft
    if (!station) {
      return res.status(400).json({ error: "station parameter is required" });
    }

    //http request naar ns api met await fetch
    const response = await fetch(
      `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=${station}`,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.NSV_API_KEY
        }
      }
    );

    const vertrektijden = await response.json(); //converteert naar json formaat
    //vertrektijden is js object met alle data van ns api
    console.log(vertrektijden);

    res.status(200).json(vertrektijden.payload?.departures || []); //als DEPARTURES hier  bestaat geef lege array !

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
