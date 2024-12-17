import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd/lib';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className=" flex flex-col  w-[1090px] ">
      <p className="text-secondary-color mb-5 ">
        <Link to={'/participants'}>
          <ArrowLeftOutlined className="mr-1" /> Back to participant list
        </Link>
      </p>
      <section className="flex justify-between border border-[silver] bg-header rounded-md p-6 px-10">
        <p className="font-bold">Patricia Bucket</p>
        <p className="text-sm">Age</p>
        <p className="text-sm">Gender</p>
        <p className="text-sm">Chronic condition</p>
        <p className="text-sm">[CAAT]</p>
        <p className="text-sm">[mMRC]</p>
        <p className="text-sm">Participant since</p>
        <Button className="bg-background-color">Message</Button>
      </section>
    </header>
  );
};

export default Header;
