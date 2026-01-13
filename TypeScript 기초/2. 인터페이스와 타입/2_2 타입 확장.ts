/**
 * 실습 2: 인터페이스와 타입
 * 문제 2-2: 타입 확장
 */

interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

// 1. User extends BaseEntity: name, email, role("admin" | "user")
interface User extends BaseEntity {
  name: string;
  email: string;
  role: "admin" | "user";
}

// 2. Product extends BaseEntity: name, price, stock, category
interface Product extends BaseEntity {
  name: string;
  price: number;
  stock: number;
  category: string;
}

// 3. Order extends BaseEntity: user(User), products(Product[]), total, status
interface Order extends BaseEntity {
  user: User;
  products: Product[];
  total: number;
  status: "pending" | "completed" | "cancelled";
}

// 4. 타입 유틸리티 사용
// - CreateUserDto: User에서 id, createdAt, updatedAt 제외
type CreateUserDto = Omit<User, "id" | "createdAt" | "updatedAt">;

// - UpdateUserDto: User의 모든 필드 선택적, id는 필수
type UpdateUserDto = Partial<User> & { id: number };

// - UserSummary: User에서 id, name만 선택
type UserSummary = Pick<User, "id" | "name">;


// 테스트 (제공된 코드)

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

// --- 콘솔 출력 추가 (실행 확인용) ---
console.log("--- 2-2 타입 확장 결과 ---");
console.log("신규 유저 DTO:", newUser);
console.log("업데이트 데이터:", updateData);
console.log("유저 요약 정보:", summary);

// 다른 파일의 변수와 충돌하지 않도록 독립된 모듈로 설정
export {};