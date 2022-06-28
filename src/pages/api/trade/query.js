import { Server } from '../lib/service'
import { getSession } from "next-auth/react";

export default async (req, res) => {
    try {
        const session = await getSession({ req });
        const token = session?.accessToken;
        const result = await Server.put('/admin/query-card-transaction', {
            id: req.body.id,
            comment: req.body.comment,
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