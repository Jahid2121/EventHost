import Link from 'next/link';
import React from 'react';

const Links = () => {
    return (
        <div className='flex gap-3'>
            <Link href="Home">Home</Link>
<Link href="Events">Events</Link>
<Link href="About us">About us</Link>
<Link href="Contact">Contact</Link>
        </div>
    );
};

export default Links;