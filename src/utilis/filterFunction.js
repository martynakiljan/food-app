/** @format */

export const filterFunction = (kitchen, sortValue, searchQuery) => {
  let sortedKitchen = [...kitchen];

  if (sortValue === "priceUp") {
    sortedKitchen.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceDown") {
    sortedKitchen.sort((a, b) => b.price - a.price);
  }

  const filteredFood = sortedKitchen.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredFood;
};
