const express = require('express');
const app = express();
const cors = require("cors");
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
dotenv.config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))