/*
 * Example generated type bindings for tables
 */

export type Tables = {
    user: UserTable;
    account: AccountTable;
};

type UserTable = {
    id: number;
    name: string;
};

type AccountTable = {
    id: number;
    user_id: number;
};
