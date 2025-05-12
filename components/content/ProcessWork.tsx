import AnimationContainer from '../utils/AnimationContainer';

const myWorkProcess = [
  {
    id: '1',
    title: 'Meeting',
    des: 'We start by discussing your ideas and what you want for your website.',
    delay: 0.3
  },
  {
    id: '2',
    title: 'Prototyping',
    des: 'I create a simple design or mockup to show you how your website could look.',
    delay: 0.4
  },
  {
    id: '3',
    title: 'SEO and content',
    des: 'We talk about what content you want and how people can find your site online.',
    delay: 0.5
  },
  {
    id: '4',
    title: 'Development phase',
    des: 'I build your website based on the design and your feedback.',
    delay: 0.6
  },
  {
    id: '5',
    title: 'Test phase',
    des: 'I check the website to make sure it works well and looks good on all devices.',
    delay: 0.7
  },
  {
    id: '6',
    title: 'Migration',
    des: 'Once everything is ready, I help put your website online.',
    delay: 0.8
  },
];

const ProcessWork = () => {
  return (
    <AnimationContainer customClassName='w-full mb-4'>

      <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-12 text-white text-start'>
        My work process
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mx-auto'>
        {
          myWorkProcess.map(({ id, title, des, delay }) => (
            <AnimationContainer
              key={id}
              customClassName='rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'
              customDelay={delay}
            >

              <h3 className='font-bold text-1xl tracking-tight text-white text-start'>
                {title}
              </h3>

              <p className='mt-2 text-base text-gray-400'>
                {des}
              </p>

            </AnimationContainer>
          ))
        }
      </div>

    </AnimationContainer>
  )
}

export default ProcessWork;