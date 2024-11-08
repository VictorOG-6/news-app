// app/[slug]/page.tsx
import { notFound } from 'next/navigation';

// Define an interface for your data type
interface Data {
    title: string;
    content: string;
}

// Mock fetch function with type
async function fetchData(slug: string): Promise<Data | null> {
    // Replace this with actual API call
    const response = await fetch(`https://api.example.com/data/${slug}`);
    return response.ok ? response.json() : null;
}

interface PageProps {
    params: { slug: string };
}

export default async function Page({ params }: PageProps) {
    const data = await fetchData(params.slug);

    // Trigger 404 if data is not found
    if (!data) {
        notFound();
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    );
}
