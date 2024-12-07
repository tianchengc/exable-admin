import { Link } from 'react-router';

function NoMatch() {
  return (
    <div className='grid h-full'>
 <div className="lg:px-24 lg:py-4 md:py-20 md:px-44 px-4 py-6 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl text-[--secondary-color]">
                Sorry we couldn't find this page.{' '}
              </h1>
              <p className="my-2 text-gray-800">
                {' '}
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
                   <Link to={'/'}>
          <button className=" px-4  inline py-2 text-sm mt-2 font-medium leading-5 shadow  transition-colors duration-150 border  rounded-lg focus:outline-none">
               back to homepage
             </button>
           </Link>
             
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
    </div>
   
  );
}

export default NoMatch;
