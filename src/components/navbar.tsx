'use client';
import Link from 'next/link';
import { JSX, SVGProps } from 'react';
import { ModeToggle } from './mode-toggle';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function NavBar() {
    return (
        <nav className=" inset-x-0 top-0 z-50 bg-transparent flex items-center h-16 px-4 md:px-6">
            <div className="flex w-48 items-center">
                <Link className="flex items-center" href="#">
                    <Image src={logo} alt="Logo" width={32} height={32} className="h-6 w-6" />
                    <span className="ml-2 text-lg font-semibold">Generalist Dev</span>
                </Link>
            </div>
            <nav className="ml-auto flex items-center space-x-4">
                <Link className="font-medium rounded-md px-3 py-2 text-sm hover:bg-gray-100/50 transition-colors" href="#">
                    Resume
                </Link>
                <Link className="font-medium rounded-md px-3 py-2 text-sm hover:bg-gray-100/50 transition-colors" href="#">
                    Contact
                </Link>
                <ModeToggle />
            </nav>
        </nav>
    );
}
