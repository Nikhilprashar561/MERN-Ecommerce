import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectionDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`Your DB Connected at ${connectionInstances.connection.host}`);
  } catch (error) {
    throw new Error({
      message: "Sorry we are not Connected in MongoDB Database",
    });
  }
};

export { connectionDB };
