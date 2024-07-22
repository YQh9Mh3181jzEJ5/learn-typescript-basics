export const test = () => {
  // function printNumberTwice(num: number): void {
  //   console.log(num);
  //   console.log(num);
  // }

  // function printstringTwice(str: string): void {
  //   console.log(str);
  //   console.log(str);
  // }

  function printTwice<T>(value: T): void {
    console.log(value);
    console.log(value);
  }

  console.log(printTwice<number>(1));
  console.log(printTwice<string>("hi"));
};
