import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-28 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-[--secondary-color] mb-4">
              Sorry we couldn't find this page.
            </h1>
            <p className="text-gray-800 mb-6">
              But don't worry, you can find plenty of other things on our homepage.
            </p>
            <Link to="/">
              <button className="px-6 py-2 text-sm font-medium rounded-lg border shadow transition-colors duration-150 hover:bg-gray-50">
                Back to homepage
              </button>
            </Link>
          </div>
          <img 
            src="https://i.ibb.co/G9DC8S0/404-2.png" 
            alt="404 illustration"
            className="mt-8"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <img 
            src="https://i.ibb.co/ck1SGFJ/Group.png" 
            alt="404 group illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
