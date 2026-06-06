export const DatePickerLimit = () => {
  const hoje = new Date();
  const min = hoje.toLocaleDateString("en-CA");
  const maxDate = new Date();
  maxDate.setDate(hoje.getDate() + 10);
  const max = maxDate.toLocaleDateString("en-CA");
  return { min, max };
};
