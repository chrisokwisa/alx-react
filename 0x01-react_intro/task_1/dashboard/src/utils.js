//getFullYear function
export const getFullYear = () => {
  return new Date().getFullYear();
};

//getFooterCopy function
export const getFooterCopy = (isIndex) => {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
};
