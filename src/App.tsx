import React from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "./api/queries";
import DisplayCard from "./components/DisplayCard/DisplayCard";

interface IAnime {
  id: number;
  title: {
    romaji: string;
    english: string;
  };
  description: string;
}

function App() {
  const { data, loading } = useQuery(GET_ANIME_LIST);

  console.log(data, "data");
  console.log(loading);

  return (
    <div className="App">
      <main>
        {!loading
          ? data.Page.media.map((anime: IAnime) => (
              <DisplayCard
                key={anime.id}
                title={anime.title.romaji}
                loading={loading}
                image="hehe"
                description={anime.description}
              />
            ))
          : null}
      </main>
    </div>
  );
}

export default App;
