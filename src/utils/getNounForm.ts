type WordForms = {
  one: string;
  two: string;
  five: string;
};

const getNounForm = (number: number, forms: WordForms) => {
  const n = Math.abs(number);
  const n10 = n % 10;
  const n100 = n % 100;

  if (n10 === 1 && n100 !== 11) {
    return forms.one;
  }

  if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) {
    return forms.two;
  }

  return forms.five;
};

export default getNounForm;
