const express = require("express");
const { sequelize, Airport, Country, City } = require("./models");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/airports", async (req, res) => {
  const iata_code = req.query.iata_code;
  try {
    const airport = await Airport.findOne({ where: { iata_code } });
    if (airport) {
      res.json(airport);
    } else {
      res.status(404).send("Airport not found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get("/api/airports/all", async (req, res) => {
  try {
    const airports = await Airport.findAll();
    res.json(airports);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get("/api/countries", async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get("/api/cities", async (req, res) => {
  try {
    const cities = await City.findAll();
    res.json(cities);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  sequelize.sync();
});
