export const test = () => {
  const sampleArray: string[] = ["a", "b", "c"];
  console.log(`元の配列: ${sampleArray}`);

  const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
    const reversedArrray: string[] = [];
    const Tom: string = "Tom";
    let index: number = arr.length - 1;

    while (index >= 0) {
      reversedArrray.push(arr[index]);
      index--;
    }

    if (hasTom) {
      reversedArrray.push(Tom);
    }

    return reversedArrray;
    // return arr.reverse();
  };

  console.log(reverseArray(sampleArray, true));
};
