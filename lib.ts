import { Tables } from "./generated";

type Parts<S> = S extends `${infer A}, ${infer B}` ? A | Parts<B> : S;
type SelectQuery<S> = S extends `select ${infer A} from ${infer After}`
    ? SelectResult<Parts<A>, GetTable<After>>
    : never;
type GetTable<S extends string> = S extends `${infer Table} ${string}`
    ? Table
    : S;

type ProcessAsKey<S> = S extends `${string} as ${infer Name}` ? Name : S;

type GetSelectValue<
    Key extends string,
    Table extends string
> = Key extends `${infer STable}.${infer Name}`
    ? GetSelectValue<Name, STable>
    : Table extends keyof Tables
    ? Key extends keyof Tables[Table]
        ? Tables[Table][Key]
        : never
    : never;

type SelectResult<
    P extends string,
    Table extends string
> = Table extends keyof Tables
    ? {
          [K in ProcessAsKey<P>]: GetSelectValue<
              P extends `${infer Original} as ${K}` ? Original : K,
              Table
          >;
      }
    : never;

export function sql<S extends string>(
    ...s: readonly [S, ...string[]]
): SelectQuery<S> {
    return null as any;
}
