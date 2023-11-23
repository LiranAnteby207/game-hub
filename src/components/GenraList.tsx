import useGenres from "../hooks/useGenres";

const GenraList = () => {
  const { genre, error, isLoading } = useGenres();

  return (
    <ul>
      {genre.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenraList;
