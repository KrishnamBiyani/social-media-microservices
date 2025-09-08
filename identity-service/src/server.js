const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./utils/logger");
const { log } = require("winston");
const { RateLimiterRedis } = require("rate-limiter-flexible");
const

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => logger.info("Connected to MongoDB"))
  .catch((err) => logger.error("MongoDB connection error", err));

  const redisClient = new Redis(process.env.REDIS_URL);

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  logger.info("Request Body:", req.body);
  next();
});
