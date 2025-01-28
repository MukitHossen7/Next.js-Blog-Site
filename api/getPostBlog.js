export const getPostData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await data.json();
  return postData;
};
