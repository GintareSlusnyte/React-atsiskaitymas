const Post = ({ data }) => {

    return ( 
        <StyledPost>
            <h1>{data.name}</h1>
            <img 
                src={data.image} 
                alt={data.name}
            />
            <p>{data.description}</p>
        </StyledPost>
     );
}
 
export default Post;