import { Checkbox } from 'antd';

export const Participants = () => {
  return (
    <div className="mt-36 w-[450px] bg-[#49A0BB] relative">
      <h1>Questionnaire Completion</h1>
      <section className="flex justify-evenly ">
        <div className="flex flex-col">
          <p>Pre-Cycle Questionnaire</p>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
        </div>

        <div className="flex flex-col">
          <p>Pre-Cycle Questionnaire</p>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
        </div>
      </section>
      <footer className=" flex justify-between mt-32">
        <small>
          <u>Download</u>``
        </small>
        <small>
          <u>View all</u>
        </small>
      </footer>
    </div>
  );
};

export default Participants;
