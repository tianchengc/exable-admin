const Progress = () => {
  return (
    // Main container
    <div className="upcoming-session p-5 pt-2">
      <h3 className="text-lg">Progress</h3>
      <main className="flex flex-wrap gap-x-5 px-2">
        <div>
          <p className="text-sm pb-2">Exercise streak</p>
          <div className="bg-[white] text-secondary-color rounded-md p-2 my-2 mx-3 text-center">
            8 <p>sessions</p>
          </div>
        </div>
        <div>
          <p className="text-sm pb-2">Attendance</p>
          <div className=" bg-[white] text-secondary-color rounded-md p-5 my-2 mx-3">
            6/10
          </div>
        </div>
      </main>
      <a href="#" className="text-xs text-white underline mt-auto">
        Download
      </a>
    </div>
  );
};

export default Progress;
