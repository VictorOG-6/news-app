// app/not-found.tsx
import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, we couldn’t find the page you’re looking for.</p>
            <Link href="/">
                <a>Go back to Home</a>
            </Link>
        </div>
    );
};

export default NotFound;
