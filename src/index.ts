import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile("/Users/z4/Workspace/my-first-website/src/index.html");
});

app.get("/experiences", (request, response) => {
  response.sendFile("/Users/z4/Workspace/my-first-website/src/experiences.html");
});

app.get("/work", (request, response) => {
  response.sendFile("/Users/z4/Workspace/my-first-website/src/work.html");
});

app.get("/contact", (request, response) => {
  response.sendFile("/Users/z4/Workspace/my-first-website/src/contact.html");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
  console.log("Server started on http://localhost:3000/experiences");
  console.log("Server started on http://localhost:3000/work");
  console.log("Server started on http://localhost:3000/contact");
});
