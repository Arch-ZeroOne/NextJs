import React from "react";

type Anime = {
  myanimelist_id: number;
  title: string;
  picture_url: string;
};
const Page = async () => {
  const response = await fetch(
    "https://myanimelist-api1.p.rapidapi.com/manga/top/special?p=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b87e99e919msh6176ee1540351d0p17b2b8jsn6ad19e3992f3",
        "x-rapidapi-host": "myanimelist-api1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    },
  );
  //Error handling in the api body

  //   const text = await response.text();
  //   console.log(text);

  if (!response.ok) throw new Error("Failure in fetching data");
  const anime = await response.json();

  console.log(anime);
  return (
    <div className="grid grid-cols-4">
      {anime.map((anime: Anime) => (
        <div key={anime.myanimelist_id}>
          <h1>{anime.title}</h1>
          <img src={anime.picture_url}></img>
        </div>
      ))}
    </div>
  );
};

export default Page;
