import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const myGithub = 'https://github.com/pickachuuu';

const ProjectsSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Projects' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='w-full text-base text-gray-400'>
            Here are some of my projects, including school, passion, and client work. To see all my projects, visit my <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>github.com/pickachuuu</a>.
          </p>

        </AnimationContainer>

        <SearchAllProjects />

      </div>

    </SectionContainer>
  )
}

export default ProjectsSection;