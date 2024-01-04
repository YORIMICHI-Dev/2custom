export const validateDetail = (detail: string): boolean => {
  if (detail.includes('aa')) {
    return true;
  }
  return false;
};

const NG_WORDS = [''];
