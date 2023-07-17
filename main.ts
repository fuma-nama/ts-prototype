import { sql } from "./lib";

const result = sql(
    "select user.id, user.name, account.user_id as UserID from user",
    "left join account on account.id = user.id",
    `where user.id = ${300}`
);

console.log(result);
