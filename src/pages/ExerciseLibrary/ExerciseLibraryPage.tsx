import { FunctionComponent } from 'react';
import { ExistingExercise } from './ExerciseLibrary';
import Button from '@components/Button';
import styles from './ExerciseLibrary.module.css';

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
    <div className={styles.exerciseLibraryPage}>
      <div className={styles.exerciseLibraryWrapper}>
        <h2 className="text-lg text-white self-start">Edit circuit detail</h2>
        <div className={styles.exerciseGrid}>
          {exercises.map((exercise, index) => (
            <ExistingExercise key={index} circuitTitle={exercise.circuitTitle} />
          ))}
        </div>
        <Button
          category="primary"
          width="regular"
        >
          Save
        </Button>
      </div>
      
    </div>
  );
};
