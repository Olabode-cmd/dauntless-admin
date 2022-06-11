import {Server} from "./lib/service";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  const token = session?.accessToken;
  const {id, card_id, name, rate, type_id, status,} = req.body
  // console.log(id)
  const result = await Server.put(
    "/admin/create-card-type",
    {
      id,
      card_id,
      rate,
      name,
      rate,
      type_id,
      status
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  res.status(200).json({ data: result });
};
