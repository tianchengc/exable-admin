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
      <section className="flex justify-between items-center border border-[silver] bg-header rounded-md p-6 px-10">
        <div className="w-12 h-12 rounded-full bg-secondary-color -mr-8" />
        <p className="font-bold">Patricia Bucket</p>
        <p className="text-xs">Age</p>
        <p className="text-xs">Gender</p>
        <p className="text-xs">Chronic condition</p>
        <p className="text-xs">[CAAT]</p>
        <p className="text-xs">[mMRC]</p>
        <p className="text-xs text-secondary-color">Participant since</p>
        <Button className="bg-background-color rounded-full text-secondary-color border-none">
          Message
        </Button>
      </section>
    </header>
  );
};

export default Header;
