import React, { useState } from 'react';

import { DayPicker } from 'react-day-picker';

export default function CustomizationProps() {
  const [month, setMonth] = useState();

  const [fixedWeeks, setFixedWeeks] = useState(true);
  const [showCaption, setShowCaption] = useState(true);
  const [showHead, setShowHead] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const [showOutsideDays, setShowOutsideDays] = useState(true);
  const [showWeekNumber, setShowWeekNumber] = useState(true);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <DayPicker
          month={month}
          fixedWeeks={fixedWeeks}
          showCaption={showCaption}
          showHead={showHead}
          showNavigation={showNavigation}
          showOutsideDays={showOutsideDays}
          showWeekNumber={showWeekNumber}
          onMonthChange={month => setMonth(month)}
        />
      </div>
      <div style={{ paddingLeft: '2em' }}>
        <label>
          <input
            type="checkbox"
            checked={fixedWeeks}
            onChange={e => setFixedWeeks(e.target.checked)}
          />{' '}
          <code>fixedWeeks</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showCaption}
            onChange={e => setShowCaption(e.target.checked)}
          />{' '}
          <code>showCaption</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showHead}
            onChange={e => setShowHead(e.target.checked)}
          />{' '}
          <code>showHead</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showOutsideDays}
            onChange={e => setShowOutsideDays(e.target.checked)}
          />{' '}
          <code>showOutsideDays</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showNavigation}
            onChange={e => setShowNavigation(e.target.checked)}
          />{' '}
          <code>showNavigation</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showWeekNumber}
            onChange={e => setShowWeekNumber(e.target.checked)}
          />{' '}
          <code>showWeekNumber</code>
        </label>
      </div>
    </div>
  );
}