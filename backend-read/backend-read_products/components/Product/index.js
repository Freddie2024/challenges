import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { name, description, price, currency, reviews } = data;
  return (
    <ProductCard>
      <h2>{name}</h2>
      <p>Description: {description}</p>
      <p>
        Price: {price} {currency}
      </p>
      {reviews && reviews.length > 0? (
      <>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map(({ _id, title, text, rating }) => (
          <li key={_id}>
            <h4>{title}</h4>
            <p>{text}</p>
            <p>{rating}</p>
          </li>
        ))}
      </ul>
    </>
    ) : (
      <p>No reviews available.</p>
    )}     
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

