import mongoose from "mongoose";
import Product from "../../model/Product";
import faker from "@faker-js/faker";
mongoose
  .connect(
    `mongodb+srv://faker:Fc5WLfb6zi4WqM4y@cluster0.yjepehx.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`connect to db`))
  .catch((error) => console.log("connection error", error));

// mongoose();
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createPost(req, res);
      break;
    case "GET":
      await getPosts(req, res);
      break;
  }
};

const getPosts = async (req, res) => {
  try {
    const data = await Product.find();
    res.json({ msg: "success", data });
  } catch (err) {
    error(err, res);
  }
};

const createPost = async (req, res) => {
  //   console.log("req", req);
  try {
    let fake;
    // for (let i = 0; i <= 10; i++) {
    fake = new Product({
      _id: i,
      title: faker.commerce.productName(),
      discription: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      category: faker.commerce.department(),
      timeToCook: faker.datatype.number({ max: 25 }),
    });
    // }
    fake.save();
    console.log("fake", fake);
    res.json({ msg: "created", fake });
  } catch (err) {
    error(err, res);
  }
};

export const error = (err, res) => {
  if (err && err.code === 11000) {
    return res.json({ err: "Item already exists" });
  }
  return res.status(500).json({ err: err.message });
};
