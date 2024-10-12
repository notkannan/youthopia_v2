export interface Comment {
    id: number;
    author: string;
    content: string;
  }
  
  export interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
    upvotes: number;
    comments: Comment[];
  }