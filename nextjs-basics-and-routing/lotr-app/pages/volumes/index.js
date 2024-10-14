import Link from 'next/link';
import { introduction, volumes } from "../../lib/data";
import { useRouter } from 'next/router';

export default function Volumes() {
  const router = useRouter();
  
  function handleClick(e) {
    e.preventDefault();
    console.log('You clicked.');
    const randomElement = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`volumes/${randomElement.slug}`); 
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p> {introduction} </p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={slug}>
             {title}
            </Link>
          </li>
         ))}
      </ul>
     <button onClick={handleClick}>Take me to a random volume</button>
    </>
  );
}