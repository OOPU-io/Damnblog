import { connect } from "mongoose";

run().catch((err) => console.log(err));

export default async function run() {
  // Connect to MongoDB
  await connect("mongodb://localhost:27017/damnblog");
}
