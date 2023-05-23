export const getDiscountedPricePercentage = (
    originPrice,
    discountedPrice
) => {
    const discount = originPrice - discountedPrice;

    const discountPercentage = (discount / originPrice) * 100;

    return discountPercentage.toFixed(2);
};