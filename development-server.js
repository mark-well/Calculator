
let express = require("express");
let app = express();
let PORT = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send(__dirname + "/index.html");
	res.status(200);
	res.end();
});

app.listen(PORT, ()=> {
	console.log(`Server is running on port ${PORT}`);
});