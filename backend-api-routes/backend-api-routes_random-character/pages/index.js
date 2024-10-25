import useSWR from "swr";

export default function HomePage() {
  
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error, isValidating } = useSWR(`/api/random-character`, fetcher);

  if (isValidating) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error loading data</h1>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>{data.firstName} {data.lastName}</h1>
      <small>
        Twitter: {data.twitterName}; 
        GeoHash: {data.geohashName}
      </small>
    </>
  );
}
