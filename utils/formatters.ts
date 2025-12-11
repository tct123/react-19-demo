export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const formatItemName = (str: string) =>
  str.split("-").map(capitalize).join(" ");

