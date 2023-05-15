import { createContext, useReducer, useEffect, useState } from "react";
import { act } from "react-dom/test-utils";

const PostsContext = createContext();
const PostsContextTypes = {
    get: 'get_all_posts'
};

const reducer = (state, action) =>{
    switch(action.type){
        case PostsContextTypes.get:
            return action.data;
        default:
            return state;
    }
}

const PostsProvider = ({ children }) => {

    const [posts, setPosts] = useReducer(reducer, []);

    useEffect(() => {
        fetch(`http://localhost:8080/posts`)
        .then(res => res.json())
        .then(data => setPosts({
            type: PostsContextTypes.get,
            data:data
        }))
    }, []);

    return ( 
        <PostsContext.Provider
            value={{
                posts,
                setPosts,
                PostsContextTypes
            }}
        >
            { children }
        </PostsContext.Provider>
     );
}
 
export { PostsProvider };
export default PostsContext;