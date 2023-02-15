export function paginate(item, pageNumbe, pageSize) {
  const startIndex = (pageNumbe - 1) * pageSize;
  return [...item].splice(startIndex, pageSize);
}
