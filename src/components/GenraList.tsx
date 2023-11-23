import useGenres, { Genre } from "../hooks/useGenres";

const GenraList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {data.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenraList;
