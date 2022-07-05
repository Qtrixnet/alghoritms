const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

export const defaultCompare = (a: number, b: number) => {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export const  swap = (arr: [], a: number, b: number) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
