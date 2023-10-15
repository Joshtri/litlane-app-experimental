const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const session = require("express-session");
const app = express();

const dashboardRouter = require("./router/dashboard");
const loginRouter = require("./router/login");
const bukuRouter = require("./router/buku");
const pesananRouter = require("./router/pesanan");
const pelangganRouter = require("./router/pelanggan");


const PORT = 3002;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.use("/", loginRouter);
app.use("/", dashboardRouter);
app.use("/data", bukuRouter, pelangganRouter, pesananRouter);

app.set("views", [
  path.join(__dirname, "/views"),
  path.join(__dirname, "/views/layouts"),
  path.join(__dirname, "/views/add"),
  path.join(__dirname, "/views/data"),
]);

// Inisialisasi middleware session
app.use(
  session({
    secret: "secret-key", // Ganti dengan secret key yang lebih kompleks
    resave: false, // False jika tidak ada perubahan pada session
    saveUninitialized: false, // False jika Anda tidak ingin menyimpan session kosong
  })
);

app.set("views", [
  path.join(__dirname, "/views"),
  path.join(__dirname, "/views/layouts"),
  path.join(__dirname, "/views/data/"),
  path.join(__dirname, "/views/add/"),
]);





app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else if (!err) {
    console.log(`sukses on port ${PORT}`);
  }
});
