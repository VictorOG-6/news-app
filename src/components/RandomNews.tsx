import { getNewsSearch } from '@/api'
import { removeDuplicateData } from '@/utils'
import React from 'react'
import RandomArticle from './RandomArticle'

const RandomNews = async () => {
    const randomNews = await getNewsSearch("random shooting")
    const filteredArticles = removeDuplicateData(randomNews)  

  return (
    <div className='mt-4 w-[450px] border-1 border-gray-300'>
        <h1 className='pl-2 text-2xl font-bold underline'>Random News</h1>
        {filteredArticles?.map((article,idx) => (
            <div key={`${article?.title}-${idx}`}>
                <RandomArticle data={article}/>
            </div>
        ))}
    </div>
  )
}

export default RandomNews