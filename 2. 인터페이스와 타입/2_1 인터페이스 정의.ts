/**
 * 실습 2: 인터페이스와 타입
 * 문제 2-1: 인터페이스 정의
 */

// 1. User: id(number), name(string), email(string), age(optional number)
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // ?는 선택적(optional) 속성
}

// 2. Post: id(number), title(string), content(string), author(User), createdAt(Date), tags(string array)
interface Post {
  id: number;
  title: string;
  content: string;
  author: User; // 위에서 정의한 User 인터페이스 사용
  createdAt: Date;
  tags: string[];
}

// 3. Comment: id(number), content(string), author(User), post(Post)
interface Comment {
  id: number;
  content: string;
  author: User;
  post: Post;
}

// 4. API Response: success(boolean), data(generic), error(optional string)
interface ApiResponse<T> {
  success: boolean;
  data: T; // 제네릭을 사용하여 다양한 타입을 담을 수 있게 설정
  error?: string;
}

// 테스트 (제공된 코드)
const user: User = {
  id: 1,
  name: "Kim",
  email: "kim@test.com"
};

const post: Post = {
  id: 1,
  title: "Hello",
  content: "World",
  author: user,
  createdAt: new Date(),
  tags: ["typescript", "tutorial"]
};

const response: ApiResponse<User[]> = {
  success: true,
  data: [user]
  
};
export {}; 