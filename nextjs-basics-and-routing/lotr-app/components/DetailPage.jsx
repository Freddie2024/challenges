import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export function DetailPage({ volumeData, currentIndex }) {
    const { title, description, books, cover } = volumeData;

    if (!volumeData) {
        return <p>Keine Daten verfügbar.</p>; // Fallback für den Fall, dass volumeData undefiniert ist
    }

    const nextIndex = currentIndex + 1 < volumes.length ? currentIndex + 1 : null;
    const nextVolume = nextIndex !== null ? volumes[nextIndex] : null;

    const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
    const prevVolume = prevIndex !== null ? volumes[prevIndex] : null;

  return (
    <div>
        <Link href={"/volumes"}>← All Volumes</Link>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
            {books.map(({ ordinal, title }) => (
                <li key={ordinal}>
                    <p>{ordinal}: {title}</p>
                </li>
            ))}
        </ul>
        <Image
            src={cover}
            alt={title}
            width={140}
            height={230}
        />
        <br />
        <br />  
        {prevVolume && (
        <Link href={`/volumes/${prevVolume.slug}`}>
           ← Previous Volume: {prevVolume.title}
        </Link>
        )}
         <br />    
         <br />      
        {nextVolume && (
         <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
         )} 
    </div>
);
}