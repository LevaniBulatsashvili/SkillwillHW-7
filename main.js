// Task N1
const mySetTimeout = async (delay) =>
  new Promise((resolve) => {
    setTimeout(
      () => resolve(`${delay} seconds have passed, time to make toys!`),
      delay * 1000
    );
  });

// Task N2
const makeToys = async (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) resolve("Toys have been made!");
      else reject("Toys are defective!");
    }, delay * 1000);
  });
};

const deliverToys = async (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1)
        resolve("Toys are delivered and ready to be sold!");
      else reject("Toys Couldn't be delivered!");
    }, delay * 1000);
  });
};

const sellToys = async (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) resolve("Toys have been sold!");
      else reject("Toys didn't sell!");
    }, delay * 1000);
  });
};

// then / catch
mySetTimeout(4)
  .then((res) => {
    console.log(res);
    return makeToys(3);
  })
  .then((res) => {
    console.log(res);
    return deliverToys(2);
  })
  .then((res) => {
    console.log(res);
    return sellToys(1);
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// async / await
const toyShop = async () => {
  try {
    const startingProductionTime = await mySetTimeout(11);
    console.log(startingProductionTime);
    const toyProductionResult = await makeToys(3);
    console.log(toyProductionResult);
    const toyDeliveryResult = await deliverToys(2);
    console.log(toyDeliveryResult);
    const toySellingResult = await sellToys(1);
    console.log(toySellingResult);
  } catch (err) {
    console.log(err);
  }
};

toyShop();
