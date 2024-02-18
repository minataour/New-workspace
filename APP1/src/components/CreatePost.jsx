import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user Id
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="How are you feeling?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="How are you feeling?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          rows="4"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          name="reactions"
          placeholder="How are you feeling?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter some tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="For relevancy"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function createPostAction(data){
  const formData = await data.request.formData()
  const postData = Object.fromEntries(formData)
  postData.tags = postData.tags.split(" ")
  console.log(postData)

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then(res => {
      addPost(res)
    });

  return redirect("/")
}

export default CreatePost;
