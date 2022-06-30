import * as React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "React Books";
  }, []);

  return <></>;
};

export default Home;
