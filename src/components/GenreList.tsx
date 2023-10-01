import useGenres from '../hooks/useGenres';

const GenraList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenraList;
