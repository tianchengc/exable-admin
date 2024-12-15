import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd/lib';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className=" flex flex-col w-[1090px] ">
      <p className="text-secondary-color mb-5 ">
        <Link to={'/participants'}>
          <ArrowLeftOutlined className="mr-1" /> Back to participant list
        </Link>
      </p>
      <section className="flex justify-between border border-[silver] bg-[white] rounded-md p-6 px-10">
        <p>Patricia Bucket</p>
        <p>Age</p>
        <p>Gender</p>
        <p>Chronic condition</p>
        <p>[CAAT]</p>
        <p>[mMRC]</p>
        <p>Participant since</p>
        <Button className="bg-background-color">Message</Button>
      </section>
    </header>
  );
};

export default Header;
