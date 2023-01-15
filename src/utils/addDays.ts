const addDays = (date: string, days: number) => {
  const result = new Date(new Date(date).getTime() + days * 24 * 60 * 60 * 1000);
  return result.toLocaleDateString('en-CA');
};

export default addDays;
