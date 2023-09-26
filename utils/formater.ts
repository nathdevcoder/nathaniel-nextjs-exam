const priceFormater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

export const formatPrice = (price:number)  => priceFormater.format(price/100)
