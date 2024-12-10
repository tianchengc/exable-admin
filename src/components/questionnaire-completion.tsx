import { Checkbox } from 'antd';

export const QuestionnaireCompletion = () => {
  return (
    <div className="rounded-md w-[492px] p-3  bg-[#49A0BB] ">
      <p className="text-white text-md">Questionnaire Completion</p>
      <section className="flex justify-between bg-[white] shadow-md rounded-lg p-1 m-2 h-60">
        <div className="flex flex-col">
          <p className="text-sm">Pre-Cycle Questionnaire</p>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
        </div>

        <div className="flex flex-col">
          <p className="text-sm">Pre-Cycle Questionnaire</p>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
        </div>
      </section>
      <footer className=" flex justify-between mt-14 mx-2 w-auto text-white underline">
        <small>
          <a href="#">Download</a>
        </small>
        <small>
          <a href="#">View all</a>
        </small>
      </footer>
    </div>
  );
};

export default QuestionnaireCompletion;
