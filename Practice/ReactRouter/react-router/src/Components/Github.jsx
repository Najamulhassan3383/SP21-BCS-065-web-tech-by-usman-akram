import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    // make a card for github profile
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold">Github</h1>
      <div className="flex flex-col items-center justify-center">
        <img
          src={data.avatar_url}
          alt="profile"
          className=" w-1/4 rounded-full"
        />
        <h1 className="text-2xl font-semibold">{data.name}</h1>
        <p className="text-xl">{data.bio}</p>
        <p className="text-xl">{data.location}</p>
        <p className="text-xl">{data.company}</p>
        <p className="text-xl">{data.blog}</p>
      </div>
    </div>
  );
}

export default Github;
export const dataFetching = async () => {
  const response = await fetch(
    "https://api.github.com/users/Najamulhassan3383"
  );
  const data = await response.json();
  return data;
};
