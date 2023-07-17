import { asyncGetPosts, asyncGetComments, getPostsFromUser, getCommentsFromPost,formatPostsWithComment } from './functions';
import { Post, Comment } from './types';

async function main() {
  const posts = await asyncGetPosts();
  const comments = await asyncGetComments();

  const userId = 3;

  const userPosts: Post[] = getPostsFromUser(userId, posts);
  console.log(userPosts);
  
  const userComments : Comment[] = getCommentsFromPost(userId, comments);
  const formattedPosts = formatPostsWithComment(posts, comments);
  console.log(userComments);
 // Log the first formatted post to the console
  console.log(formattedPosts[0]);
}

main();