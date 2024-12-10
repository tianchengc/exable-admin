const ProfileSummary = () => {
  return (
    <div className="rounded-md w-[520px] px-4 bg-[#49A0BB] flex flex-col ">
      <p className="text-white text-lg mt-2 font-bold">Profile Summary</p>
      <ProfileTextItem label={'Phone number:'} />
      <ProfileTextItem label={'Address:'} />
      <ProfileTextItem label={"Participant's role:"} />
      <ProfileTextItem label={'What do you hope to achieve in FBB'} />
      <ProfileTextItem label={'Primary Emergency Contact:'} />
      <ProfileTextItem label={'Name'} />
      <ProfileTextItem label={'Number'} />
    </div>
  );
};

export default ProfileSummary;

const ProfileTextItem = ({ label }: { label: string }) => {
  return <p className="text-sm text-white">{label}</p>;
};
