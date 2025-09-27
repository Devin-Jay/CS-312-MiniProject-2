import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//--------------------------------------------get
app.get("/", (req, res) => {
    res.render("index.ejs");
});

//-------------------------------------------post
app.post("/submit", async (req, res) => {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const cocktail = response.data.drinks[0];

        res.render("index.ejs", {cocktail : cocktail});
    } catch (error) {
        console.error("error");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});