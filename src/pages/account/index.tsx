import { FunctionComponent } from 'react';
import { Page } from '../../components/Page';
import { ProfessionalInfo } from './components/professional-info';
import './style.css';

export const Account: FunctionComponent<{}> = () => {
  return (
    <Page title="Account">
      <h1 className='title'>Account setting</h1>

      {/* My Profile */}
      
      {/* Professional Info */}
      <ProfessionalInfo />
    </Page>
  );
};
