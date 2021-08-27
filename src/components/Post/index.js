import {Card, Button } from 'antd';

const Post = ({title, body, id, deletePost}) => {

  return (
      <Card>
        <h1>{title}</h1>
        <p>{body}</p>
        <Button danger onClick={() => deletePost(id)}>Delete</Button>
      </Card>
  );
};

export default Post;