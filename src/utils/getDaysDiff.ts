const getDaysDiff = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = endDate.getTime() - startDate.getTime();
  return diff / (1000 * 3600 * 24);
};

export default getDaysDiff;
