import { news } from "@/types"

export const removeDuplicateData = (articles: { articles: news[] }) => {
    const randomArticle:news[] = articles?.articles
    const filterArticles = randomArticle?.filter(article => article?.source.id !== null)
    return filterArticles
}