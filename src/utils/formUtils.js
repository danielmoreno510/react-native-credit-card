export const validateCreditCard = (value) => {
  if ((value.match(/^[0-9 ]+$/) || value === "") && value.length < 20) {
    let newValue = value.replace(/ /g, "");
    if (value !== "") {
      newValue = newValue.match(/.{1,4}/g).join(" ");
    }
    return newValue;
  } else {
    return false;
  }
};

export const defaultCreditCard = (value) => {
  let newValue = value.replace(/ /g, "");
  let quantity = newValue.length;

  while (quantity < 16) {
    newValue = `${newValue}x`;
    quantity++;
  }

  newValue = newValue.match(/.{1,4}/g).join(" ");

  return newValue;
};

export const validateCreditCardDate = (value) => {
  if ((value.match(/^[0-9/]+$/) || value === "") && value.length < 6) {
    let newValue = value.replace("/", "");
    if (value !== "") {
      newValue = newValue.match(/.{1,2}/g).join("/");
    }
    return newValue;
  } else {
    return false;
  }
};

export const defaultCreditCardDate = (value) => {
  let newValue = value.replace("/", "");
  let quantity = newValue.length;

  while (quantity < 4) {
    newValue = `${newValue}x`;
    quantity++;
  }

  newValue = newValue.match(/.{1,2}/g).join("/");

  return newValue;
};

export const validateCreditCardCcv = (value) =>
  (value.match(/^[0-9]+$/) || value === "") && value.length < 4;

export const defaultCreditCardCcv = (value) => {
  let quantity = value.length;
  let newValue = value;
  while (quantity < 3) {
    newValue = `${newValue}x`;
    quantity++;
  }
  return newValue;
};
