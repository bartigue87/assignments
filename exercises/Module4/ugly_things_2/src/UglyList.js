import React from "react";

function UglyList() {
  const UglyThings = [
    {
      title: "blobfish",
      img:
        "https://media.moddb.com/cache/images/groups/1/9/8215/thumb_620x2000/oceana-ecard_blobfish.jpg",
      description: "Ugly fish"
    }
  ];
  return (
    <div>
      <h3>{UglyThings.title}</h3>
      <img src={uglyThings.img} />
      <p>{UglyThings.description}</p>
    </div>
  );
}
export default UglyList;
