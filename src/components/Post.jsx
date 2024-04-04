import { AiFillDelete } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Post.module.css";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
function Post({post})
{
  const {deletePost}=useContext(PostListContext);
    return <div className={`card ${styles.post}`} style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">
        {post.title}
        <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.deleteIcon}`} onClick={()=> deletePost(post.id)}><AiFillDelete></AiFillDelete></span>
      </h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag)=><span className={`badge text-bg-primary ${styles.tag}`}>#{tag}</span>)}
      <div className={`alert alert-success reactions ${styles.reactions}`} role="alert">
        This post has been reacted by {post.reactions} people.
      </div>
    </div>
  </div>
}
export default Post;