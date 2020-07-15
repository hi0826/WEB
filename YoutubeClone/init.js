import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./model/Video";
import "./model/Comment";
import "./model/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
