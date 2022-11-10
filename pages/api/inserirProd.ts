import type { NextApiRequest, NextApiResponse } from 'next'
import PocketBase from 'pocketbase'

const client = new PocketBase('http://127.0.0.1:8090/')

const authAdmin =  await client.admins.authViaEmail('fabriciobs2000@gmail.com', 'Fabriciobs@1');
const record = await client.records.getOne('products', 'ronftaf3b4ylrxm', {
    expand: 'some_relation'
});



// type Data = {
//     id: Record
// }


export default function test(req: NextApiRequest, res: NextApiResponse<any>) {
    // if (req.body.name) {
    //     const response = (req.body.name)
    //     res.status(200).json(response)
    // }    

    res.status(200).json(record)
}