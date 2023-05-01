import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  token: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const username = req.body.username;
    const password = req.body.password;

    // TODO authenticate user
    // response: user JWT token
    const token = "token";

    res.status(200).json({ token: token });
  }
}
