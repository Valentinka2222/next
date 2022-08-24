import { NextApiRequest, NextApiResponse } from '../../node_modules/next/dist/shared/lib/utils';
import { socials } from './data/socials';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(socials);
  }
}
