import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Freelance</a> | Feb. 2025 - {calculateDuration('2025-02-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development and freelance website projects, including full-cycle delivery for a client using Next.js, Tailwind CSS, and Framer Motion. I applied best practices such as clean architecture, modular design, pixel-perfect implementation, and Git version control. The work was managed independently, following agile-inspired iterations and client feedback to ensure fast and flexible delivery.
          </TimelineEvent.Description>

        <TimelineEvent.Description>
        In addition to development, I also focused on SEO optimization and performance tuning. I utilized tools such as Google Search Console, Lighthouse, Vercel Analytics, and Bing Webmaster Tools to improve the site's search engine visibility and performance. This led to an enhanced online presence for the client’s business. I also handled ongoing site maintenance, ensuring the website stayed fast, accessible, and up to date.
        </TimelineEvent.Description>

        </TimelineEvent>

      {/* <TimelineEvent>

        <TimelineEvent.Title>Freelance | Feb. 2022 - Mar. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and development of web pages applying agile methodologies, clean architecture, SOLID principles and pixel perfect in all projects, I have developed almost all types of projects from Landing pages, stores, blogs and dashboards.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Studio Iluxion | May. 2022 - Jul. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent> */}

    </Timeline>
  )
}

export default CurrentTimeLineExp;
