import "./App.css";

function App() {
  const posts = [
    {
      author: "User 1",
      avatar: "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png",
      time: "2 hours ago",
      content: "This is my first post! 🎉",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
      author: "User 2",
      avatar: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "4 hours ago",
      content: "Enjoying a beautiful day outdoors! ☀️",
      image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
    },
    {
      author: "User 3",
      avatar: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "1 day ago",
      content: "Exploring new places and cultures. 🌍✈️",
      image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
    }
  ];

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection feedData = {posts}/>
    </div>
  );
}

const PostContainer = () => {
  return (
    <div class="post-container">
      <div class="post-header">
        <img class="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div class="post-author">You</div>
      </div>
      <div class="post-content">
        <textarea
          class="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div class="post-actions">
        <button class="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = ({feedData}) => {
  // const feedPost = feed.feedData
  return (
    <div className="feed">
    {feedData.map(item => {
        return (
          <Post
            author={item.author}
            avatar={item.avatar}
            time={item.time}
            content={item.content}
            image={item.image}
          />
        )
      })}
  </div>);
};

const Post = ({author,avatar,time,content,image}) => {
  // const {author,avatar,time,content,image} = props;
  return (
    <div class="post">
        <div class="post-header">
          <img
            class="post-avatar" src={avatar} alt={author}
          />
          <div>
            <div class="post-author">{author}</div>
            <div class="post-time">{time}</div>
          </div>
        </div>
        <div class="post-content">{content}</div>
        <img
          class="post-image"
          src={image}
          alt="Post 1"
        />
        <button>DELETE</button>
    </div>
  )
}

export default App;
