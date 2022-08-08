import axios from "axios";

const BASE_USL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJkZDZmZDFiMWEyOTBmMzU1Y2ExMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTk3MjM3MCwiZXhwIjoxNjYwMjMxNTcwfQ.IkqAPMJ-B2tCn_AmGDtIU9x4tfuT6MYjYtBHSRRvJ8k";

export const publicRequest = axios.create({
  baseURL: BASE_USL,
});

export const userRequest = axios.create({
  baseURL: BASE_USL,
  header: { token: `Bearer ${TOKEN}` },
});
