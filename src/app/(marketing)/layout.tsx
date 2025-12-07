
import Footer from '@/components/landing/Footer';
import Navbar from '@/components/landing/Navbar';
import React from 'react';

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout
