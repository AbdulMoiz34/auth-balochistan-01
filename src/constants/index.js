import "dotenv/config";

const ENV = process.env;

const PORT = ENV.PORT;
const MONGO_URI = ENV.MONGO_URI;
const JWT_SECRET = ENV.JWT_SECRET;

export { PORT, MONGO_URI , JWT_SECRET };