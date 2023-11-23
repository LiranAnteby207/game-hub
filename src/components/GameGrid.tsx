import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCrdContainer from "./GameCrdContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
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
    </>
  );
};

export default GameGrid;
