
let express = require("express");
let bodyParser = require('body-parser');
let app = express();
let PORT = 8080;

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send(__dirname + "/index.html");
	res.status(200);
	res.end();
});

app.post("/api", (req, res) => {
	console.log(req.body);
	res.status(200);
	res.end();
});

app.listen(PORT, ()=> {
	console.log(`Server is running on port ${PORT}`);
});
