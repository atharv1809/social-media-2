import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
function PostList()
{
    const {postList,addInitialPosts}=useContext(PostListContext);
    // useEffect(()=>{fetch('https://dummyjson.com/posts').then(res => res.json()).then((data=>{addInitialPosts(data.posts)}));},[]);
    return <>
    {postList.length==0 && <WelcomeMessage></WelcomeMessage>}
    {postList.map((post)=> <Post key={post.id} post={post}></Post>)}
    </>
}
export default PostList;