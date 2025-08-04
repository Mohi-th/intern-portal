const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const internRoutes = require("./routes/internRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/intern", internRoutes);

mongoose
  .connect(process.env.MONGO_URI||"mongodb+srv://mohithmohith880:mohith123@cluster0.em4z2.mongodb.net/myDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log(err));
