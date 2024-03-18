import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDb } from "./src/db/db.connection.js";

import { allFavouriteLocationsRouter } from "./src/routes/favouriteLocationRoutes/allFavouriteLocations.route.js";
import { addFavouriteLocationRouter } from "./src/routes/favouriteLocationRoutes/addFavouriteLocation.route.js";
import { deleteFavouriteLocationRouter } from "./src/routes/favouriteLocationRoutes/deleteFavouriteLocation.route.js";

import { registerUserRouter } from "./src/routes/userRoutes/registerUser.route.js";
import { loginUserRouter } from "./src/routes/userRoutes/loginUser.route.js";
import { updatePasswordRouter } from "./src/routes/userRoutes/updatePassword.route.js";

const app = express();

dotenv.config({
    path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ``}`,
});

app.use(cors());
app.use(express.json());

connectDb();

app.use("/user", registerUserRouter);
app.use("/user", loginUserRouter);
app.use("/user", updatePasswordRouter);

app.use("/user", allFavouriteLocationsRouter);
app.use("/user", addFavouriteLocationRouter);
app.use("/user", deleteFavouriteLocationRouter);

// const { PORT, HOST } = process.env;

// const server = app.listen(PORT, HOST, () => {
//     const SERVERHOST = server.address().address;
//     const SERVERPORT = server.address().port;
//     console.log(`Server is listening at http://${SERVERHOST}:${SERVERPORT}`);
// });

const { PORT, HOST } = process.env;

const server = app.listen(PORT, () => {
    console.log(`Server is listening at http://${HOST}:${PORT}`);
});



export default server;
