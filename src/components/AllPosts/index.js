import React, {useEffect} from "react";
import Post from "../Post";
import {connect} from "react-redux";
import {deletePost as deletePostAction, getPosts as getPostsAction} from "../../redux/modules/posts";
import CreatePost from "../CreatePost";

const AllPosts = ({posts, getPosts, deletePost}) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
      <div>
        <CreatePost />
        <div className="App">
          {posts.length && posts.map(item => <Post deletePost={deletePost} id={item.id} key={item.id} title={item.title} body={item.body}/>)}
        </div>
      </div>
  )
};

export default connect(
    ({ posts }) => ({ posts: posts.posts }),
    {
      getPosts: getPostsAction,
      deletePost: deletePostAction
    }
)(AllPosts);