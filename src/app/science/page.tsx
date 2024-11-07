import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'
import React from 'react'

const Science = async () => {
  const newsScience = await getNewsSearch("sciences")  
  const filterArticles = removeDuplicateData(newsScience)
  return (
    <div className='w-[700px]'>
        {filterArticles.map((article,idx) => (
            <div key={`${article?.title}-${idx}`}>
                <Article data={article}/>
            </div>
        ))}
    </div>
  )
}

export default Science