import { Button } from 'antd';

const ProgramInformation = () => {
  return (
    <div className="rounded-md w-[520px] px-4 bg-[#49A0BB] flex flex-col ">
      <p className="text-white text-lg mt-2">Program Information</p>
      <div className="flex p-4 pb-2 flex-wrap gap-4  ">
        <Button className="rounded-full bg-background-color border-none text-secondary-color">
          "Tell us more" data
        </Button>
        <Button className="rounded-full ml-auto bg-background-color border-none text-secondary-color">
          "FFB program enrolment" data
        </Button>
        <Button className=" rounded-full bg-background-color border-none text-secondary-color">
          "Post-Cycle Questionnaire" data
        </Button>

        <a href="#" className="text-sm text-white underline w-full">
          View all
        </a>
      </div>
    </div>
  );
};

export default ProgramInformation;
