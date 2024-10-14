import { useEffect, useState } from "react";
import { volumes } from "@/lib/data";
import { DetailPage } from "@/components/DetailPage";
import { useRouter } from "next/router";

export default function VolumePage () {   

    const [volumeData, setVolumeData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const router = useRouter();
    const { slug } = router.query; 

    useEffect(() => {

     if (router.isReady && slug) {

    const foundVolume = volumes.find(volume => volume.slug === slug);
    const foundIndex = volumes.findIndex(volume => volume.slug === slug);

     if (foundVolume) {
        setVolumeData(foundVolume);
        setCurrentIndex(foundIndex);
       }
    }

    }, [slug, router.isReady]); 

    if (!volumeData) {
        return <p>Lade...</p>;
    }
     
return  <DetailPage volumeData={volumeData} currentIndex={currentIndex} />;

}
    
