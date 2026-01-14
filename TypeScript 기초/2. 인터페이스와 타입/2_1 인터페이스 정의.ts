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

console.log(user, post, response);

export {};