import express from "express";
const app = express();

app.use(express.static('.'));

const port = 3000; // Specify the desired port number

console.log(process.env.PORT || 3000);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
