interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface User extends BaseEntity {
  name: string;
  email: string;
  role: "admin" | "user";
}

interface Product extends BaseEntity {
  name: string;
  price: number;
  stock: number;
  category: string;
}

interface Order extends BaseEntity {
  user: User;
  products: Product[];
  total: number;
  status: "pending" | "completed" | "cancelled";
}

type CreateUserDto = Omit<User, "id" | "createdAt" | "updatedAt">;
type UpdateUserDto = Partial<User> & { id: number };
type UserSummary = Pick<User, "id" | "name">;

const newUser: CreateUserDto = {
  name: "Kim",
  email: "kim@test.com",
  role: "user"
};

const updateData: UpdateUserDto = {
  id: 1,
  name: "Lee"
};

const summary: UserSummary = {
  id: 1,
  name: "Kim"
};

console.log(newUser, updateData, summary);

export {};