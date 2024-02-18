import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const {deletePost} = useContext(PostList);

  return (
    <div className="card post-card" >
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick = {() => deletePost(post.id)}>
          <AiFillDelete />
        </span>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has {post.reactions} reactions.
        </div>
      </div>
    </div>
  );
};

export default Post;
