// const QuestionnaireCompletion = () => {
//   return <div>Questionnaire Completion Component</div>;
// };

// export default QuestionnaireCompletion;
// -----
import { Checkbox } from 'antd';

export const QuestionnaireCompletion = () => {
  return (
    <div className="container_questionnaire rounded-md w-[400px] p-2 bg-[#49A0BB] ">
      <h1 className="text-white">Questionnaire Completion</h1>
      <section className="flex justify-between bg-[white] shadow-md rounded-lg p-1 m-2 h-32">
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
      <footer className=" flex justify-between mt-6 mx-2 w-[370px]">
        <small>
          <u className="text-white">Download</u>
        </small>
        <small>
          <u className="text-white">View all</u>
        </small>
      </footer>
    </div>
  );
};

export default QuestionnaireCompletion;
