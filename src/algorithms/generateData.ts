const generateData = (n: number): Array<number> => {
  const randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
};

export default generateData;
