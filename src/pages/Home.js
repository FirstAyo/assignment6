import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {

    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((posts) => {
          setAppState({ loading: false, posts: posts.slice(0, 5) });
        })
        .catch(() => {
          setAppState({ loading: false, posts: [] });
        });
    }, 1500);

    return () => clearTimeout(timer);

    // setAppState({ loading: false, posts: hardCodedPosts });
  }, []);

  return <Posts isLoading={appState.loading} posts={appState.posts} />;
}
export default Home;
