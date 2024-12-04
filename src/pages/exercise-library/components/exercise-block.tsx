import { FunctionComponent } from 'react';
import '../style.css';
import uploadIcon from '../../../assets/upload_icon.svg';
export const ExistingExercise: FunctionComponent<{
  circuitTitle: string;
}> = ({ circuitTitle }) => {
  return (
    <div className="exercise-card px-2 py-4 pt-2">
      <h3 className="text-sm self-start">{circuitTitle}</h3>
     <div className="exercise-card-body">
     <a href="#">
        <img src={uploadIcon} alt="Upload Icon" className="upload-icon block" />
      </a>
      <button className="browse-btn btn py-1 px-3">Browse</button>
      <textarea className="h-32 p-2 rounded-md resize-none focus:outline-none circuit-description" placeholder="Type description"></textarea>
     </div>
      </div>
  );
};
