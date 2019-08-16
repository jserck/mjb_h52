export default function size(size, num) {
  if (size.endsWith('M')) {
    let sum = Number(size.replace(/(M|K|KB)$/gi, ''));
    if (sum > num) {
      return true;
    }
  } else if (size.endsWith('K') || size.endsWith('KB')) {
    let sum = Number(size.replace(/(M|K|KB)$/gi, ''));
    if (sum > num * 1024) {
      return true;
    }
  }
  return false;
}
