import axios from "axios";

export const sendSms = async (source, destination, message, apiOptions) => {
  const response = await axios.post(
    `${apiOptions.teliUrl}/sms/send?token=${
      apiOptions.apiToken
    }&source=${source}&destination=${destination}&message=${message}`
  );

  return response;
};
