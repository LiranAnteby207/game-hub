import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCrdContainer from "./GameCrdContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skel) => (
          <GameCrdContainer key={skel}>
            <GameCardSkeleton />
          </GameCrdContainer>
        ))}
      {data.map((game) => (
        <GameCrdContainer key={game.id}>
          <GameCard game={game} />
        </GameCrdContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
