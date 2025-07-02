'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '0',
    title: 'MemoForge',
    des: 'Smart Learning Platform',
    category: 'Typescript - NextJS - Supabase',
    repo: 'https://github.com/pickachuuu/revisea',
    link: 'https://memoforge.vercel.app/auth'
  },
  {
    id: '1',
    title: 'CATalog Mobile',
    des: 'A simplified mobile version of the CATalog web app, designed for seamless inventory management on the go.',
    category: 'Typescript - React Native',
    repo: 'https://github.com/pickachuuu/CATalog',
  },
  {
    id: '2',
    title: 'CH5 Cooling Supplies',
    des: 'My first client website project, built with Next.js and TailwindCSS for a modern, responsive business presence.',
    category: 'Typescript - NextJS',
    link: 'https://www.ch5coolingtowers.com.ph/'
  },
  {
    id: '3',
    title: 'CATalog',
    des: 'A full-stack inventory management system developed with React and Express, enabling efficient product tracking and management.',
    category: 'Javascript - React - Express - MYSQL',
    repo: 'https://github.com/pickachuuu/ims-frontend',
  },
  {
    id: '5',
    title: 'PongBat',
    des: 'A remastered version of Pong, featuring enhanced graphics, custom sprites, and a redesigned scoring system using Python and Pygame.',
    category: 'Python - Pygame',
    repo: 'https://github.com/pickachuuu/PongBat',
  },
  {
    id: '6',
    title: 'Dino Jump',
    des: 'A Python and Pygame recreation of the classic Chrome Dino game, offering a fun and challenging endless runner experience.',
    category: 'Python - Pygame',
    repo: 'https://github.com/pickachuuu/Dino',
  },
  {
    id: '7',
    title: 'Pong',
    des: 'My first coding project: a faithful recreation of the classic Pong game using Python and Pygame.',
    category: 'Python - Pygame',
    repo: 'https://github.com/pickachuuu/Pong',
  },
];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

          <div className='grid place-items-center h-full w-12 text-gray-500'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Languages, frameworks, libraries, etc...'
            onChange={e => setProjectSearch(e.target.value)} />
        </div>

      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;