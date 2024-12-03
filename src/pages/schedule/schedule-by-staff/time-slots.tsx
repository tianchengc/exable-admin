const TimeSlot = () => {
  const generateTimeSlot = () => {
    const startHour = 10;
    const endHour = 16;
    const timeSlot = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      const am_pm = hour < 12 ? 'am' : 'pm';
      const formatedHour = hour % 12 == 0 ? 12 : hour % 12;
      timeSlot.push(`${formatedHour}:00${am_pm}`);
    }
    return timeSlot;
  };

  const timeSlots = generateTimeSlot();

  return (
    <div>
      {timeSlots.map((time, index) => (
        <div key={index}>{time}</div>
      ))}
    </div>
  );
};

export default TimeSlot;
