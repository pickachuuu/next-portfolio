'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Derek Berbo ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Derek Berbo, I'm from Cebu and currently a Computer Science student at the University of San Carlos. I build full-stack applications with a focus on frontend development using React, Next.js, TypeScript, and JavaScript. I'm always learning and improving my craft, applying best practices like clean architecture, modular design, and pixel-perfect implementation. I also work with Express, Python, and SQL databases for backend development. I'm passionate about tech and constantly exploring new tools and approaches to become a well-rounded developer.`,
    keywords: 'Derek Berbo, Derek Berbo portfolio, Derek Berbo GitHub, Derek Berbo LinkedIn, Cebu developer, React developer, Next.js, TypeScript, JavaScript, Express, Python, SQL, Frontend Developer, Fullstack Developer, Web Development, Clean Code, University of San Carlos, USC CS Student',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`derek-five.vercel.app${pathname}`} />
      <link rel='canonical' href={`derek-five.vercel.app${pathname}`} />
      <link rel='me' href='mailto:chrisDerekBerbo@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Derek Berbo' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      {/* <meta name='twitter:site' content='@Derekberbo_' /> */}
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;