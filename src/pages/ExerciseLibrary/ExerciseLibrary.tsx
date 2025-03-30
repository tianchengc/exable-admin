import { FunctionComponent } from 'react';
import uploadIcon from '@assets/upload_icon.svg';
import styles from './ExerciseLibrary.module.css';
import Button from '@components/Button';

export const ExistingExercise: FunctionComponent<{
  circuitTitle: string;
}> = ({ circuitTitle }) => {
  return (
    <div className={styles.exerciseCard}>
      <h3 className="text-sm self-start">{circuitTitle}</h3>
      <div className={styles.exerciseCardBody}>
        <a href="#">
            <img src={uploadIcon} alt="Upload Icon" />
          </a>
          <Button 
            category="secondary" 
            width="small" 
            className={styles.browseBtn}
          >
            Browse
          </Button>
          <textarea className="h-32 p-2 rounded-md resize-none focus:outline-none circuit-description" placeholder="Type description"></textarea>
      </div>
      </div>
  );
};
