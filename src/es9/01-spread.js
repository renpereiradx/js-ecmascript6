const user = { userName: "darthrpm", age: 31, country: "PY" };
const { userName, ...values } = user;
console.log(`${userName} tipo ${typeof userName}`);
console.log(values);
console.log(`${values} tipo ${typeof values}`);
console.table(values);