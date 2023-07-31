export const emailValidation = (email: string) => {
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const nameValidation = (name: string) => {
  return name.length >= 3;
};
