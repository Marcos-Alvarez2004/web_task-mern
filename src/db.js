import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://maaarcosaaalvarez13:CCW5nFrlXGGib5zY@task-mern.gnwmyt9.mongodb.net/"
    );
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
