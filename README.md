# Typescript SDL Prototype

A SDL prototype using Typescript's string manipulation.

## Target

```ts
const userId = 1;
const result = sql(
    "select user.name as name, account.email as email from user",
    "left join account on account.user_id = user.id",
    `where user.id = ${userId}`
);

console.log(result.name, result.email); // no errors
console.log(result.id); // error
```

### Problems

1. String templates can't be used because of [this issue](https://github.com/microsoft/TypeScript/issues/31422)
2. Performance will be terrible in large codebases
