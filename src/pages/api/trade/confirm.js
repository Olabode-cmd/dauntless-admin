import { Server } from '../lib/service'
import { getSession } from "next-auth/react";

export default async (req, res) => {
    try {
        const session = await getSession({ req });
        const token = session?.accessToken;
        const result = await Server.put('/admin/confirm-card-transaction', {
            id: req.body.id,
        },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        res.status(200).json({ data: result });
    }
    catch (error) {
        res.status(500).json({ error });
    }

}