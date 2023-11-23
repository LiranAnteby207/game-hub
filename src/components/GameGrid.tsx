import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCrdContainer from "./GameCrdContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skel) => (
            <GameCrdContainer>
              <GameCardSkeleton key={skel} />
            </GameCrdContainer>
          ))}
        {data.map((game) => (
          <GameCrdContainer>
            <GameCard key={game.id} game={game} />
          </GameCrdContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
