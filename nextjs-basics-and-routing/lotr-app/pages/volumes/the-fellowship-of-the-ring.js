import { volumes } from "@/lib/data";
import Link from "next/link";

export default function TheFellowshipOfTheRing({books}) {
    const volume = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");

    return (
        <div>
            <Link href={"/volumes"}>← All Volumes</Link>
           
                    <h1>{volume.title}</h1>
                    <p>{volume.description}</p>
                    <ul>
                       {volume.books.map(({ ordinal, title }) => (
                        <li key={ordinal}>
                            <p>{ordinal}: {title}</p>
                        </li>
                       ))}
                    </ul>
    
        </div>
    );
}

