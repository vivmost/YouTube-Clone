import React from "react";
import Button from "./Button";

// const list = ["ALL", "Gaming, "Movies", "Music"]
// loop through this list and and buttons later

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="ALL" />
      <Button name="Gaming" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Movies" />
      <Button name="Music" />
      <Button name="Gaming" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Movies" />
      <Button name="Music" />
    </div>
  );
};

export default ButtonList;
