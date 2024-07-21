export const test = () => {
  // const sampleArray: string[] = ["a", "b", "c"];
  // console.log(`元の配列: ${sampleArray}`);
  // const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
  //   const reversedArrray: string[] = [];
  //   const Tom: string = "Tom";
  //   let index: number = arr.length - 1;
  //   while (index >= 0) {
  //     reversedArrray.push(arr[index]);
  //     index--;
  //   }
  //   if (hasTom) {
  //     reversedArrray.push(Tom);
  //   }
  //   return reversedArrray;
  //   // return arr.reverse();
  // };
  // console.log(reverseArray(sampleArray, true));
  // interface UserProps {
  //   userId: number;
  //   name: string;
  //   age: number;
  //   email: string;
  //   isActive: boolean;
  // }
  // interface AdminUser extends UserProps {
  //   role: string;
  // }
  // type UserProps = {
  //   userId: number;
  //   name: string;
  //   age: number;
  //   email: string;
  //   isActive: boolean;
  // };
  // type AdminUserProps = UserProps & {
  //   role: string;
  // };
  // const user: UserProps = {
  //   userId: 1,
  //   name: "mike",
  //   age: 25,
  //   email: "mike@gmail.com",
  //   isActive: true,
  // };
  // const createAcount = (accountInfo: AdminUserProps): void => {
  //   console.log(accountInfo);
  // };
  // createAcount({
  //   userId: 12,
  //   name: "mike",
  //   age: 25,
  //   email: "mike@gmail.com",
  //   isActive: true,
  //   role: "test",
  // });

  class User {
    userId?: number;
    name: string;
    age: number;
    email?: string;
    isActive?: boolean;

    constructor(
      userId: number,
      name: string,
      age: number,
      email: string,
      isActive: boolean
    ) {
      (this.userId = userId),
        (this.name = name),
        (this.age = age),
        (this.email = email),
        (this.isActive = isActive);
    }

    public getProfile(): string {
      return `Name: ${this.name}, age: ${this.age}`;
    }

    +static sayHelloWorld(): void {
      console.log("hee");
    }
  }

  const user1 = new User(1, "na", 1, "3r3@gmail.com", true);
  console.log(user1.getProfile());

  User.sayHelloWorld();
};
