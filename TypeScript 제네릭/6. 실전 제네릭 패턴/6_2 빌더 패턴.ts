class QueryBuilderImpl<T> {
  private query: string = "";
  constructor(private table: string) {}
  select(...fields: string[]) { this.query += `SELECT ${fields.join(', ')} FROM ${this.table}`; return this; }
  where(field: string, value: any) { this.query += ` WHERE ${field} = ${value}`; return this; }
  build() { return this.query; }
}

function createQueryBuilder<T>(table: string) {
  return new QueryBuilderImpl<T>(table) as any;
}
// 테스트
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const query = createQueryBuilder<User>("users")
  .select("id", "name")
  .where("age", 25)
  .orderBy("name", "asc")
  .limit(10)
  .build();

// SELECT id, name FROM users WHERE age = 25 ORDER BY name ASC LIMIT 10