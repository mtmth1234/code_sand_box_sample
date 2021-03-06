console.clear();
console.log("clear");
/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "letを上書き";
// console.log(val2);

// let val2 = "再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "test";

// const val3 = "const変数を再宣言";
// const val4 = {
//   name: "myName",
//   age: 28
// };

// console.log(val4);

// val4.name = "newName";
// val4.age = 19;

// console.log(val4);

// val4.address = "Chiba";

// console.log(val4);

// //配列
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "myName";
// const age = 20;

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const name = "myName";
// const age = 20;

// //テンプレート文字列を用いる場合
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// const myProfile = {
//   name: "myName",
//   age: 20
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。2`;
// console.log(message2);

// const myProfile = ["myName", 20];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。2`;
// console.log(message4);

/**
 * デフォルト値
 */

// const sayHello = (name = "guest") => console.log(`こんにちは！${name}さん!`);
// sayHello("myName");

/**
 * スプレッド構文 ...
 */

//配列の展開

// const arr1 = [1, 2, 3];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

const nameArr = ["A", "B", "C"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(Object.prototype.toString.call(nameArr2));
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "A") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };

// console.log(checkSum(1, 100));

/**
 * 論理演算子の本当の意味
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("どちらかtrue");
// }

// if (flag1 && flag2) {
//   console.log("両方true");
// }

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
