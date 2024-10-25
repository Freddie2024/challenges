import useSWR from "swr";

// export const fetcher = (...args) =>
//     fetch(...args).then((result) => result.json());

export default function Products() {
    const fetcher = (url) => fetch(url).then((response) => response.json());  
    const { data, error, isValidating } = useSWR(`/api/products`, fetcher);
    
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
        <ul>
        {data.map((product) => (
          <li key={product.id}>
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price} {product.currency}</p>
                <p>{product.category}</p>
            </div>
          </li>
        ))}
      </ul>
      );
    }

