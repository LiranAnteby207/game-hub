import { useEffect, useState } from "react";
import apiCliend from "../services/api-cliend";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}

interface FetchGamesRes {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiCliend
      .get<FetchGamesRes>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;