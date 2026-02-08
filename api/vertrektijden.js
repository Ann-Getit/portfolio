export default async function handler(req, res) {
  try {

    const response = await fetch(
      `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=${UICCode}`,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.NSV_API_KEY
        }
      }
    );

    const vertrektijden = await response.json();

    res.status(200).json(vertrektijden.payload || vertrektijden);

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
