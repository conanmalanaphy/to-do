/**
 * Move an item to a position in array
 * @param {array} arr - array to be sorted
 * @param {number} fromIndex - original position of element
 * @param {number} toIndex - new postion of element
 * @return {array} newly sorted array
 */
export function moveArrayItem<T>(arr: T[], fromIndex: number, toIndex: number) {
  const newArr = [...arr];

  // Don't do anything if first or last
  if (toIndex > -1 && toIndex < newArr.length) {
    const element = newArr[fromIndex];
    // take it out of array
    newArr.splice(fromIndex, 1);

    // place it into the new postion
    newArr.splice(toIndex, 0, element);
  }

  return newArr;
}

interface baseElement {
  id: number;
}

/**
 * Finds the highest id of any object in array
 * @param {array} array - array to be searched
 * @return {number} the next highest id number
 */
export function newMaxId<T extends baseElement>(array: T[]) {
  // if there are no elements in the array we can say the new id can be 1
  if (array.length === 0) {
    return 1;
  }

  return Math.max(...array.map((o: T) => o.id)) + 1;
}
