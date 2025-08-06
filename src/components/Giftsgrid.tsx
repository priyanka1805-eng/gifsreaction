import React from 'react';
import { fetchGifs } from "../lib/giphy";

interface Props {
  query: string;
}

const Giftsgrid: React.FC<Props> = ({ query }) => {
  const [gif, setGifs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getGifs = async () => {
      setLoading(true);
      try {
        const res = await fetchGifs(query); // Pass the query
        console.log(res);
        setGifs(res); // Set the fetched gifs here
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };

    getGifs(); 
  }, [query]); // Add query as a dependency

  if (loading) return <p>Loading GIFs...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {gif.map((gif) => (
        <img
          key={gif.id}
          src={gif.images.fixed_height.url}
          alt={gif.title}
          className="rounded shadow-md"
        />
      ))}
    </div>
  );
};

export default Giftsgrid;
