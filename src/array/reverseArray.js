import { swapArrayNumber } from "./swapArrayNum.js";
function reverseArray(arr, start, end) {
  while (start < end) {
    swapArrayNumber(arr, start, end);
    start++;
    end--;
  }
}
export { reverseArray };
