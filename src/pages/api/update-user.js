import {Server} from './lib/service'
import { getSession } from "next-auth/react";

export default async (req, res) => {
  console.log(req.body)
  try {
    const session = await getSession({ req });
    const token = session?.accessToken;
    const result = await Server.put('/admin/user-status', {
      id: req.body.id,
      status: req.body.status
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (result.status === 200) {
      
    }
    return  res.status(500).json({ error: result.data });
  } catch (error) {
    console.log(error)
  }
 
}