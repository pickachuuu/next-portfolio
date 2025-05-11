'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'CATalog Mobile',
    des: 'Project using the pokeapi api, you can search the pokemons you want.',
    category: 'Typescript - React Native',
    repo: 'https://jeandv.github.io/pokedex',
    link: 'https://jeandv.github.io/pokedex'
  },
  {
    id: '2',
    title: 'CATalog',
    des: 'This is one of the challenges done in CADIF1 Academy. ',
    category: 'Javascript - React - Express - MYSQL',
    repo: 'https://jeandv.github.io/memoria-game',
    link: 'https://github.com/jeandv/memoria-game'
  },
  {
    id: '3',
    title: 'CH5 Cooling Supplies',
    des: 'frontendmentor.io challenge where I use the github api to be able to search for github users.',
    category: 'Typescript - NextJS',
    repo: 'https://jeandv.github.io/pokedex',
    link: 'https://jeandv.github.io/pokedex'
  },
  {
    id: '5',
    title: 'PongBat',
    des: 'Save your favorite movies with the ability to edit, delete and search for matches.',
    category: 'Python - Pygame',
    repo: 'https://github.com/jeandv/mispelis',
    link: 'https://mispelis.vercel.app'
  },
  {
    id: '6',
    title: 'Dino Jump',
    des: 'Gif finder using giphy.com api.',
    category: 'Python - Pygame',
    repo: 'https://github.com/jeandv/maps-app',
    link: 'https://gixfy.vercel.app'
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