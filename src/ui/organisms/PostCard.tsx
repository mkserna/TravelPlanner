import React from "react";

interface PostProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostProps> = ({ title, body }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;