import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'
import React from 'react'

const Sports = async () => {
  const newsSports = await getNewsSearch("sports")  
  const filterArticles = removeDuplicateData(newsSports)
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

export default Sports