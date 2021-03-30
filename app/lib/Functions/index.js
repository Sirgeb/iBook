export const formatPrice = (price, round = true) => {
  const formattedPrice = round ? Math.round(price / 100) : price / 100;
  return `$${formattedPrice}`;
};