import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        Computer Science student at the University of San Carlos with hands-on experience in building modern web applications. 
        I specialize in frontend development using React, Next.js, TypeScript, and JavaScript, and I have solid backend experience 
        with Express, Python, and SQL-based databases. I’m passionate about writing clean, maintainable code and continuously 
        improving through best practices such as clean architecture, modular design, and version control using Git. 
        I enjoy working on collaborative projects and exploring the full development lifecycle—from prototyping to deployment. 
        I’m currently deepening my skills in scalable system design and DevOps practices to become a more versatile developer.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;
