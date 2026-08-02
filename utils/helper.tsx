const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number);
};

const handleError = (message) => {
  if (typeof message === "object" && message !== null) {
    const errors = [];

    Object.keys(message).forEach((key) => {
      message[key].forEach((e) => {
        errors.push(e);
      });
    });

    return errors.join(", ");
  }

  return message;
};
const salePercent=(price,salePrice)=>{
  return Math.round(((price-salePrice)/price)*100);

}

export { numberFormat, handleError,salePercent };
