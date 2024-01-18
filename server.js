import express from "npm:express@4";

const app = express();

app.egt("/", (request, response) => {
    response.send("Hello from Express!");
});

app.listen(3000);
