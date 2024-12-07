import { FunctionComponent } from 'react';
import { ExistingExercise } from './components/exercise-block';

export const ExerciseLibraryPage: FunctionComponent = () => {
  const exercises = [
    { circuitTitle: 'Session 1' },
    { circuitTitle: 'Session 2' },
    { circuitTitle: 'Session 3' },
    { circuitTitle: 'Session 4' },
    { circuitTitle: 'Session 5' },
    { circuitTitle: 'Session 6' },
  ];

  return (
    <div className="exercise-library-page">
      <h2 className="text-lg text-white self-start">Edit circuit detail</h2>
      <div className="exercise-grid">
        {exercises.map((exercise, index) => (
          <ExistingExercise key={index} circuitTitle={exercise.circuitTitle} />
        ))}
      </div>
      <button className="save-button">Save</button>
    </div>
  );
};
