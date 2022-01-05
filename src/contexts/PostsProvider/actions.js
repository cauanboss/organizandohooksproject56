import * as types from './types';

export const loadPosts = async (dispatch) => {
  const postsRow = await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log(postsRow);
  const posts = await postsRow.json();
  return () => {
    dispatch({ type: types.POSTS_SUCCESS, payload: posts });
  };
};
