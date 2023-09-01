import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();
  const data = get();

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection postData = {data} removePost = {remove}/>
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

const FeedSection = ({postData,removePost}) => {
  return (
    <div className="feed">
      {postData.map(item => {
          return (
          <Post
            id={item.id}
            author={item.author}
            avatar={item.avatar}
            time={item.time}
            content={item.content}
            image={item.image}
            removePost={removePost}
          />
          
        )
      })}
      
    </div>
  );
};

const Post = ({id,author,avatar,time,content,image,removePost}) => {
  return (
    <div class="post" key={id}>
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
      <button onClick={() => removePost(id)}>Delete</button>
        
    </div>
  );
};

export default App;
