import Image from "next/image";
import AdLeft from './adleft.png';
import AdRight from './adright.png'; 

interface AdBannerProps {
    position: 'left' | 'right';
}

export default function AdBanner({ position }: AdBannerProps) {
    const adImage = position === 'left' ? AdLeft : AdRight;

    return (
        <div className={`ad-banner ${position}`}>
            <Image
                src={adImage}
                alt={`Advertisement at the ${position} side`}
                width={300}
                height={600}
            />
        </div>
    );
}
