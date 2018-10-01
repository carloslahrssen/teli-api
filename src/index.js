import axios from "axios";
import dotenv from "dotenv";
//Load environment variables
dotenv.config();
const { TELI_URL, API_KEY } = process.env;

const sendSms = async (source, destination, message) => {
  response = await axios.get(
    `${TELI_URL}/sms/send?token=${API_KEY}&source=${source}&destination=${destination}$message=${message}`
  );

  return response;
};

export { sendSms };
