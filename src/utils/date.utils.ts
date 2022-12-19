export const formatDate = (d: Date) => {
  // const dateReceived = new Date(d);
  const date = d.toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];
  return `${date} ${time}`;
};
