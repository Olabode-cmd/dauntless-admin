import {Server} from "./lib/service";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  const token = session?.accessToken;
  const {card_id, name, rate, type_id, status,} = req.body
  const result = await Server.post(
    "/admin/create-card-type",
    {
      card_id : card_id?.id, name, rate, type_id, status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  res.status(200).json({ data: result });
};
