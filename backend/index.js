const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "fb74abe7-76a4-4234-a6a5-2a464e10235c" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

});

app.get("/", async (req, res) => {

  // Get or create user on Chat Engine!
  try {
    return res.status(200).json("Running");
  } catch (e) {
    return res.status(404).json("Not Found");
  }

});

app.listen(3001);