import React from 'react';
import { shallow } from 'enzyme';

import SwitchPeriodComparative from 'components/SwitchPeriodComparative';

import { startDate, endDate, previousPriodText, samePriodLastYearText } from '../mock/SwitchPeriodComparative';

describe('<SwitchPeriodComparative>', () => {
  it('Should render the correct component', () => {
    const switchPeriodComparative = shallow(
      <SwitchPeriodComparative
        startDate={startDate}
        endDate={endDate}
        previousPriodText={previousPriodText}
        samePriodLastYearText={samePriodLastYearText}
      />
    );
    expect(switchPeriodComparative.find('StyledSwitchPeriodComparative').length).toEqual(1);  });
});
