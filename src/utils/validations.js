import * as EmailValidator from "email-validator";
export const isEmpty = (value) => {
  if (value) {
    return false;
  }
  return "Поле обязательно к заполнению";
};
export const isEmailInvalid = (email) => {
  if (EmailValidator.validate(email)) {
    return false;
  }
  return "Некорректный email";
};
export const isValidText = (value) => {
  const letters = /^[а-яА-ЯёЁa-zA\s-]+$/;
  if (letters.test(value)) {
    return false;
  }
  return "Недопустимый символ";
};
export const isMinMax = (value) => {
  if (value.length > 2 && value.length < 30) {
    return false;
  }
  return "Имя не дожно быть меньше 2 и больше 30 символов";
};
export const checkValidations = (validations, value) => {
  let validationsResult = false;
  validations.forEach((validation) => {
    const currentValidation = validation.call(null, value);
    if (currentValidation) validationsResult = currentValidation;
  });
  return validationsResult;
};
