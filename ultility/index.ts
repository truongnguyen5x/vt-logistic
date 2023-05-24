export const getPrefixImageUrl = (url?: string) => {
  return process.env.NEXT_PUBLIC_PREFIX_IMG_URL + (url || "");
};
