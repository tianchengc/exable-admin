import { observer } from 'mobx-react';
import Class_Info_Card from './class-info-card';
import Edit_Info_Card from './edit-info-card';

export const Class_Card = observer(() => {
  const dom = (
    <div className="class-card">
      <div className="class-menu">
        <div className="class-info">
          <h2 className="class-info-title">Class info</h2>
          <Class_Info_Card />
        </div>
        <div className="edit-info">
          <h2 className="edit-info-title">Edit information</h2>
          <Edit_Info_Card />
        </div>
      </div>
    </div>
  );
  return dom;
});
