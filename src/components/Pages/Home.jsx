import styled from "styled-components";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";
import UsersContext from "../../contexts/UsersContext";
import Post from "../Molecules/Post";

const StyledHome = styled.main`
  h1{
    font-size: 1.7rem;
    text-align: center;
  }
  .korteles{
    padding-bottom: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 25px;
    flex-wrap: wrap;
    h1{
        font-size: 1.3rem;
    }
    >div{
        box-shadow: 0 0 1px;
        height: 550px;
        width: 250px;
        >img{
            width: 100%;
            height: 50%;
        }
        p{
            font-size: 14px;
            padding-inline: 10px;
        }
    }
  }

`;

const Home = () => {

    const { posts } = useContext(PostsContext);

    return ( 
        <StyledHome>
            <h1>POSTS</h1>
            <div className="korteles">
                {
                    posts.map(post =>
                        <Post
                        key={post.id}
                        data={post}
                        />
                    )
                }
            </div>
        </StyledHome>
     );
}
 
export default Home;