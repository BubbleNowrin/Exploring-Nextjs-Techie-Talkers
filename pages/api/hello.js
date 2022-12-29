// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import data from "../../data/fakeData.json"

export default function handler(req, res) {
  res.status(200).send(data);
}
