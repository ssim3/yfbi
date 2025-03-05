import { client } from '@/sanity/lib/client'
import { likes_by_id } from '@/sanity/lib/queries'
import { Flame } from 'lucide-react'
import { notFound } from 'next/navigation'
import React from 'react'

const Likes = async ({id} : {id : string}) => {
  
    const { likes } = await client.fetch(likes_by_id, { id })
  
    return (
    <div className='relative'>
        <Flame color='#f43f5e' size={44} />
        <span className='absolute top-0 left-5 bg-rose-500 w-10 h-10 rounded-full'>{likes}</span>           
    </div>
  )
}

export default Likes  