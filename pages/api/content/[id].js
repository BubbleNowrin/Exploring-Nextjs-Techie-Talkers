import data from "../../../data/fakeData.json"

export default function handler(req, res) {
    const id = req.query.id;

    const product = data.find(dt => dt.id === id.toString())
    // console.log(product);
    res.status(200).json({ product });
}