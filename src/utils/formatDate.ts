const formatDate = (date: string) =>
  new Date(date)
    .toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .slice(0, -3);

export default formatDate;
