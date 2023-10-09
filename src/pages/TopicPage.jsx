import React from "react";
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const { topic } = useParams();
  return <h2>{topic}</h2>;
};

export default TopicPage;
