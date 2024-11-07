export const getNewsTopHeadlines = async () => {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    if (!apiKey) {
        throw new Error("API key is not defined in the environment variables.");
    }
    const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, {cache: 'no-store'})
    return newsData.json()
}

export const getNewsSearch = async (keyword:string) => {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    if (!apiKey) {
        throw new Error("API key is not defined in the environment variables.");
    }
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${keyword}&pageSize=10`, {cache: 'no-store'})
    return newsData.json()
}