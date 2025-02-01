import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setParticipants, setLoading, setError } from '../store/actions/participantActions';

const ParticipantList = () => {
  const dispatch = useAppDispatch();
  const { participants, loading, error } = useAppSelector(state => state.participants);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        dispatch(setLoading(true));
        const response = await fetch('/api/participants');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch participants');
        }
        
        dispatch(setParticipants(data));
      } catch (error) {
        dispatch(setError(error instanceof Error ? error.message : 'An error occurred'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchParticipants();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {participants.map(participant => (
        <div key={participant.id}>
          {participant.name} - {participant.email}
        </div>
      ))}
    </div>
  );
};

export default ParticipantList; 