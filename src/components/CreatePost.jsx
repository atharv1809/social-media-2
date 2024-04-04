import "bootstrap/dist/css/bootstrap.min.css"
import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
function CreatePost()
{
  const {addPost}=useContext(PostListContext)
  const userId=useRef();
  const postTitle=useRef();
  const postBody=useRef();
  const reactions=useRef();
  const tags=useRef();
  const handleSubmit=(event) =>
  {
    event.preventDefault();
    const ui=userId.current.value;
    const pt=postTitle.current.value;
    const pb=postBody.current.value;
    const r=reactions.current.value;
    const t=tags.current.value.split(/(\s+)/);
    addPost(ui,pt,pb,r,t);
    userId.current.value="";
    postTitle.current.value="";
    postBody.current.value="";
    reactions.current.value="";
    tags.current.value="";
    fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: pt,
      body: pb,
      reactions: r,
      userId: ui,
      tags: t,
    }),
    })
    .then(res => res.json())
    .then(resObj=>addPost(resObj));
    }
  return <form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="userId" className="form-label"> Enter your UserId</label>
    <input type="text" ref={userId} className="form-control" id="userId" placeholder="Enter your userId."/>
  </div>
  <div className="mb-3">
    <label for="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitle} className="form-control" id="title" placeholder="How are you feeling??"/>
  </div>
  <div className="mb-3">
    <label for="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postBody} className="form-control" id="body" placeholder="Tell us more about it." rows="4"/>
  </div>
  <div className="mb-3">
    <label for="reactions" className="form-label">Number of Reactions</label>
    <input type="text" ref={reactions} className="form-control" id="reactions" placeholder="Enter total number of reactions."/>
  </div>
  <div className="mb-3">
    <label for="tags" className="form-label">Tags</label>
    <input type="text" ref={tags} className="form-control" id="tags" placeholder="Enter tags with space."/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
  </form>
}
export default CreatePost;