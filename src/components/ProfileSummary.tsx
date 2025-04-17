const ProfileSummary = () => {
  return (
    <div className="rounded-md px-4 pb-2 bg-secondary-color ">
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
