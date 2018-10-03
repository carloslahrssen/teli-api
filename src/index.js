import axios from "axios";

const sendSms = async (source, destination, message, apiOptions) => {
  const response = await axios.post(
    `${apiOptions.teliUrl}/sms/send?token=${
      apiOptions.apiToken
    }&source=${source}&destination=${destination}&message=${message}`
  );

  return response;
};

export { sendSms };
