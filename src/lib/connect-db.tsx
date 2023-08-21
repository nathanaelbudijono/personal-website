import { connect, connection } from "mongoose";
const options: any = {
  useUnifiedTopology: true,

  useNewUrlParser: true,
};

export const connectToDatabase = async () => {
  if (!connection.readyState) {
    console.log("Connected to databas");
    connect(`${process.env.MONGO_URI}`, options);
  }
};
