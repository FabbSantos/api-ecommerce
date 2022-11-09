import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: String
}


export default function test(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.body.name) {
        const response = (req.body.name)
        res.status(200).json(response)
    }
}