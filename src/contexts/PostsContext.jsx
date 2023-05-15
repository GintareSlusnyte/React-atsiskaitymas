import { createContext, useReducer, useEffect } from "react";

const PostsContext = createContext();

const PostsActionTypes = {
  get: 'get_all_posts',
  add: 'add_post' 
};

const reducer = (state, action) => {
  switch (action.type) {
    case PostsActionTypes.get:
      return action.data;
    case PostsActionTypes.add: 
      return [...state, action.data];
    default:
      return state;
  }
};

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/posts`)
      .then(res => res.json())
      .then(data => setPosts({
        type: PostsActionTypes.get,
        data: data
      }));
  }, []);


  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        PostsActionTypes
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export { PostsProvider };
export default PostsContext;