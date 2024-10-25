import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());  

export default function Product() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <h1>Loading...</h1>;
    }

    const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher); 
  
    if (error) {
        return <h1>Error loading data</h1>;
      }
    
    if (!data) {
        return <h1>Loading...</h1>;
      }

    const { name, description, price, currency, category } = data;

    return (       
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price} {currency}</p>
                <p>{category}</p>
            </div>
     )
    }

