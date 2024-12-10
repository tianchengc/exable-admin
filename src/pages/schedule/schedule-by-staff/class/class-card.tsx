import { observer } from 'mobx-react';
import Class_Info_Card from './components/class-info-card';
import Edit_Info_Card from './components/edit-info-card';
import Participant_List from './components/participant-card';
import { Button, Space } from 'antd';
import './style.css';

const participant_data = [
  { name: 'Richard Brown', symptom: 'COPD' },
  { name: 'Tim Johnson', symptom: 'COPD' },
  { name: 'Trish Lee', symptom: 'COPD, Asthma' },
  { name: 'Richard Brown', symptom: 'COPD' },
  { name: 'Richard Brown', symptom: 'COPD' },
  { name: 'Richard Brown', symptom: 'COPD' },
];

export const Class_Card = observer(() => {
  const dom = (
    <div className="class-card_s">
      <div className="class-menu_s">
        <div className="class-info_s">
          <h2 className="class-info-title_s">Class info</h2>
          <Class_Info_Card />
        </div>
        <div className="edit-info_s">
          <h2 className="edit-info-title_s">Edit information</h2>
          <Edit_Info_Card />
        </div>
        <div className="participant-list_s">
          <h2 className="participant-list-title_s">Participant List</h2>
          <div className="participant-bar_s">
            {participant_data.map((item, index) => (
              <Participant_List key={index} data={item} />
            ))}
          </div>
          <Space
            align="center"
            style={{
              width: '50%',
              justifyContent: 'center',
            }}
          >
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: '#F44336',
                borderColor: '#F44336',
                borderRadius: '20px',
                marginLeft: '300px',
                marginTop: '10px',
              }}
            >
              Edit Participant
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
  return dom;
});
