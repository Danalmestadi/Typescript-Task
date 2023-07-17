// interfaces represents  shape of data returned
export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
  
  export interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
  }
  export interface FormatedPost {
    userId: number;
    title: string;
    body: string;
    comments: Comment[];
  }