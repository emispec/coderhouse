const { faker } = require("@faker-js/faker");

const randomData = () => {
  const productsFaker = [];
  for (let i = 0; i < 5; i++) {
    const product = {
      name: faker.name.firstName(),
      price: faker.commerce.price(0, 500, 0, "$"),
      img: faker.image.abstract(),
    };
    productsFaker.push(product);
  }
  return productsFaker;
};

module.exports = randomData;
