export const formatDate = (d: string | undefined) => {
  if (d) {
    const stringToDate = new Date(d);
    return new Intl.DateTimeFormat('it-IT', { dateStyle: 'medium', timeStyle: 'short' }).format(stringToDate);
  }
};
