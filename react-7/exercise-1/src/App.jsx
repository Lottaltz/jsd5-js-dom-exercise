import { useContext } from "react";
import "./App.css";
import { createContext } from "react";
import { useState } from "react";

const PostData = createContext({});

function App() {
  const posts = [
    {
      author: "User 1",
      avatar:
        "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png",
      time: "2 hours ago",
      content: "This is my first post! 🎉",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    },
    {
      author: "User 2",
      avatar:
        "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "4 hours ago",
      content: "Enjoying a beautiful day outdoors! ☀️",
      image:
        "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
    },
    {
      author: "User 3",
      avatar:
        "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "1 day ago",
      content: "Exploring new places and cultures. 🌍✈️",
      image:
        "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
    },
  ];
 
  const [post,setPost] = useState(posts);

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostData.Provider value={{post,setPost}}>
      <PostContainer />
      <FeedSection />
      </PostData.Provider>
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className="post-actions">
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = () => { 
  const {post} = useContext(PostData);
  return (
    <div className="feed">
      {post.map((item) => {
        return (
          <Post {...item}
            // author={item.author}
            // avatar={item.avatar}
            // time={item.time}
            // content={item.content}
            // image={item.image}
          />
        );
      })}
    </div>
  );
};

const Post = ({author,avatar,time,image,content}) => {
 
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt={author} />
        <div>
          <div className="post-author">{author}</div>
          <div className="post-time">{time}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <img className="post-image" src={image} alt="Post 1" />
      <button>DELETE</button>
    </div>
  );
};

export default App;
