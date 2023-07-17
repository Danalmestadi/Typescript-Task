import axios from 'axios';
import { Post, Comment ,FormatedPost } from './types';

//retrieves all posts from API using axios
export async function asyncGetPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}
//retrieves all comments from API using axios
export async function asyncGetComments(): Promise<Comment[]> {
  const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  return response.data;
}
// fillters an array of posts by user ID
export function getPostsFromUser(id: number, posts: Post[]): Post[] {
  return posts.filter(post => post.userId === id);
}

// fillters an array of comments by user ID
export function getCommentsFromPost(id: number, comments: Comment[]): Comment[] {
  return comments.filter(comment => comment.postId === id);
}

// combines an array of posts with corresponding comments 
export function formatPostsWithComment(posts: Post[], comments: Comment[]): FormatedPost[] {
  var formattedPosts: FormatedPost[] = [];

  for (const post of posts) {
    var postComments = getCommentsFromPost(post.id, comments);

    var formattedPost: FormatedPost = {
      userId: post.userId,
      title: post.title,
      body: post.body,
      comments: postComments,
    };

    formattedPosts.push(formattedPost);
  }

  return formattedPosts;
}