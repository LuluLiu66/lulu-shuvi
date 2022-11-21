import { useLoaderData } from "@shuvi/runtime";
import { postsMockData } from "../../../posts-mock-data";

export default function PostPage() {
  const { id, title, content } = useLoaderData();
  return (
    <div>
      <h1>{title}</h1>
      <h2>ID:{id}</h2>
      <p>{content}</p>
    </div>
  );
}

export const loader = (ctx) => {
  const { id } = ctx.params;
  return postsMockData.find((item) => item.id === id);
};