const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const request = require("request");

const app = express();
app.use(express());
app.use(express.json());
app.use(cors(*));

dotenv.config();

const PORT = 8001;

app.use("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/run", async (req, res) => {
  const { script, stdin, language, versionIndex } = req.body;

  var program = {
    script,
    stdin,
    language,
    versionIndex,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  };

  request(
    {
      url: process.env.REACT_APP_API_URL,
      method: "POST",
      json: program,
    },

    function (error, response, body) {
      if (error) {
        return res.status(response.statusCode).send(error);
      } else {
        return res.status(response.statusCode).json(body);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
