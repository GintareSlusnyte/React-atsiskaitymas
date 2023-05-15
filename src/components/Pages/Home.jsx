import styled from "styled-components";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";

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
                posts.map((post) => (
                <div key={post.id}>
                <h2>{post.name}</h2>
                <img 
                    src={post.image} 
                    alt={post.name} 
                />
                <p>{post.description}</p>
            </div>
      ))}
            </div>
        </StyledHome>
     );
}
 
export default Home;