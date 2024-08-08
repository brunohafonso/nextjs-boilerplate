export const getNameInitials = (name?: string | null) => {
  if (!name) {
    return 'N/A';
  }

  return name
    .split(' ')
    .map((namePart) => namePart.charAt(0))
    .join('')
    .toUpperCase();
};
