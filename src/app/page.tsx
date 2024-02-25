import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from '@tabler/icons-react';
import Image from 'next/image';
import persona from '@/assets/persona.webp';

export default function Home() {
    return (
        <BentoGrid className="max-w-6xl mx-auto top-2">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 1 || i === 6 ? 'md:col-span-2' : ''}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const AboutContent = () => {
    const words = `An Experienced full stack developer with a demonstrated history of working in the information technology and services industry.Skilled in React, Node.js, Express.js, MongoDB, and AWS.`;
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
            <TextGenerateEffect words={words} className="text-grey" />
        </div>
    );
};

const items = [
    {
        title: 'Eswar Saladi',
        description: 'A Generalist Developer, who loves to build things.',
        header: (
            <div className="relative w-full h-full">
                <Image src={persona} alt="Eswar Saladi" layout="fill" objectFit="cover" objectPosition="center top" />
            </div>
        ),
        // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'About',
        // description: 'Dive into the transformative power of technology.',
        header: <AboutContent />,
        // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Art of Design',
        description: 'Discover the beauty of thoughtful and functional design.',
        header: <Skeleton />,
        // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Power of Communication',
        description: 'Understand the impact of effective communication in our lives.',
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Pursuit of Knowledge',
        description: 'Join the quest for understanding and enlightenment.',
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Joy of Creation',
        description: 'Experience the thrill of bringing ideas to life.',
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Spirit of Adventure',
        description: 'Embark on exciting journeys and thrilling discoveries.',
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
