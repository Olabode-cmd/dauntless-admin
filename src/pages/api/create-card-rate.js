import {Server} from "./lib/service";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  const token = session?.accessToken;
  const {id,  name, rate} = req.body
  const result = await Server.post(
    "/admin/create-card-rate",
    {
      id,
      rate,
      name
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  res.status(200).json({ data: result });
};
