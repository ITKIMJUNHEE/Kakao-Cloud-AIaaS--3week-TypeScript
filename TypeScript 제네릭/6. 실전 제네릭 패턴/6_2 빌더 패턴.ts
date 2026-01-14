interface IQueryBuilder<T> {
  select(...fields: (keyof T)[]): IQueryBuilder<T>;
  where<K extends keyof T>(field: K, value: T[K]): IQueryBuilder<T>;
  orderBy(field: keyof T, direction: "asc" | "desc"): IQueryBuilder<T>;
  limit(count: number): IQueryBuilder<T>;
  build(): string;
}

class QueryBuilder<T> implements IQueryBuilder<T> {
  private query: string = "";
  private table: string;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: (keyof T)[]) {
    this.query += `SELECT ${fields.join(", ")} FROM ${this.table}`;
    return this;
  }

  where<K extends keyof T>(field: K, value: T[K]) {
    const formattedValue = typeof value === "string" ? `'${value}'` : value;
    this.query += ` WHERE ${String(field)} = ${formattedValue}`;
    return this;
  }

  orderBy(field: keyof T, direction: "asc" | "desc") {
    this.query += ` ORDER BY ${String(field)} ${direction.toUpperCase()}`;
    return this;
  }

  limit(count: number) {
    this.query += ` LIMIT ${count}`;
    return this;
  }

  build(): string {
    return this.query;
  }
}

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const builder = new QueryBuilder<User>("users");
const result = builder
  .select("id", "name")
  .where("age", 25)
  .orderBy("name", "asc")
  .limit(10)
  .build();

console.log(result);

export {};