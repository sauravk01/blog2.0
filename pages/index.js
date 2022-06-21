import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    itemGenerator();
  }, []);
  const itemGenerator = () => {
    let products = [];
    for (let i = 0; i <= 10; i++) {
      products[i] = {
        _id: i,
        title: faker.commerce.productName(),
        discription: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        category: faker.commerce.department(),
        timeToCook: faker.datatype.number({ max: 25 }),
      };
    }

    setData(products);
  };
  console.log(data);

  return <div>data</div>;
}
