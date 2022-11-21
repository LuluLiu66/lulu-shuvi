import { useLoaderData, Link } from "@shuvi/runtime";
import { postsMockData } from "../../posts-mock-data";

export default function PostsPage() {
  const data = useLoaderData();

  return (
    <div>
      <ul>
        {data.posts.map((post) => {
          return (
            <li key={post.id}>
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const loader = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        posts: postsMockData,
      });
    }, 1000);
  });
};