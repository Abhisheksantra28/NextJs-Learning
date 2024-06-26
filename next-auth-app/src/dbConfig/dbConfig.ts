import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully!!");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB Connection Error, Please make sure mongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while DB connection!!");
    console.log(error);
  }
};
