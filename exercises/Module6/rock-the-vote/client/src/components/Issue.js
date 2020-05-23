import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Issue(props) {
  const { title, description, _id } = props;
  const { isToggledOn, toggle } = useContext(UserContext);

  return (
    <div className="issue">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <p>Upvotes:</p>
      <p>Downvotes:</p>
      <button onClick={toggle}>{isToggledOn ? "Hide " : ""}Comment</button>
      <textarea style={{ display: isToggledOn ? "block" : "none" }}></textarea>
      <button>Upvote</button>
      <button>Downvote</button>
    </div>
  );
}
