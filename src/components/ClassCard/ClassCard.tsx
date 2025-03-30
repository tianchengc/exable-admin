import Class_Info_Card from '../ClassInfoCard';
import Edit_Info_Card from '../EditInfoCard';
import Participant_List from '../ParticipantCard';
import { Button, Space } from 'antd';
import styles from './ClassCard.module.css';

const participant_data = [
  { name: 'Richard Brown', symptom: 'COPD' },
  { name: 'Tim Johnson', symptom: 'COPD' },
  { name: 'Trish Lee', symptom: 'COPD, Asthma' },
  { name: 'Richard Brown', symptom: 'COPD' },
  { name: 'Richard Brown', symptom: 'COPD' },
  { name: 'Richard Brown', symptom: 'COPD' },
];

export const ClassCard = () => {
  const dom = (
    <div className={styles.classCard}>
      <div className={styles.classMenu}>
        <div className={styles.classInfo}>
          <h2 className={styles.classInfoTitle}>Class info</h2>
          <Class_Info_Card />
        </div>
        <div className={styles.editInfo}>
          <h2 className={styles.editInfoTitle}>Edit information</h2>
          <Edit_Info_Card />
        </div>
        <div className={styles.participantList}>
          <h2 className={styles.participantListTitle}>Participant List</h2>
          <div className={styles.participantBar}>
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
};

export default ClassCard;