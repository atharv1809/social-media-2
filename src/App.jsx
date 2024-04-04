import Header from "./components/Header";
import Footer from "./components/Foorter";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import { useState } from "react";
import  "./App.css";
function App()
{
  const [selectedTab,setSelectedTab]=useState("Home");
  return <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        <div className="body">
          {selectedTab==='Home' ? <PostList></PostList> : <CreatePost></CreatePost>} 
        </div>
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
}
export default App;