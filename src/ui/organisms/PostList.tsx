import React from "react";
import PostCard from "./PostCard";
import useFetch from "../../hooks/useFetch";
import { fetchPosts } from "../../services/api";

const PostList: React.FC = () => {
  const { data: posts, loading, error } = useFetch(fetchPosts);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;