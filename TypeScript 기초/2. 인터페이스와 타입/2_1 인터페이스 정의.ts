/**
 * 실습 2: 인터페이스와 타입
 * 문제 2-1: 인터페이스 정의
 */

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  tags: string[];
}

interface Comment {
  id: number;
  content: string;
  author: User;
  post: Post;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// 테스트 데이터
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

// --- 콘솔 출력 추가 ---
console.log("--- 2-1 인터페이스 정의 결과 ---");
console.log("생성된 유저:", user);
console.log("생성된 포스트 제목:", post.title);
console.log("API 응답 데이터:", response.data);

export {};