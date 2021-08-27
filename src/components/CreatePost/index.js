import {Form, Input, Button} from "antd";
import { connect } from "react-redux";
import {createPost as createPostAction} from "../../redux/modules/posts";

const createPost = ({createPost}) => {

const onSubmit = (values) => {
  createPost(values);
};

  return (
      <Form
          name="basic"
          onFinish={onSubmit}
      >
        <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input title' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
            label="Body"
            name="body"
            rules={[{ required: true, message: 'Please input body' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
  )
};

export default connect (
  null,
    {
      createPost: createPostAction
    }
)(createPost);