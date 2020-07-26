import React, { useState } from 'react';
import Header from '../Header/Header';
import BGImages from '../BGImages/BGImages';
import GridMode from '../GridMode/GridMode';
import ListMode from '../ListMode/ListMode';
import LoadMore from '../Button/Button';
import Toggle from '../Toggle/Toggle';
import DatePicker from '../DatePicker/DatePicker';
import { dataPicker } from './styleApp.module.css';
import collectionImgs from '../../utils/helpers';

const App = () => {
  const [view, setView] = useState('grid');
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());

  const handleChange = (event, nextView) => {
    if (!nextView) {
      return;
    }
    setView(nextView);
  };

  return (
    <main>
      <BGImages />
      <Header startDate={startDate} />
      <div className={dataPicker}>
        Date
        <DatePicker Date={startDate} setDate={setStartDate} />
        <DatePicker Date={endDate} setDate={setEndDate} />
      </div>
      <Toggle handleChange={handleChange} view={view} />
      <section>
        {collectionImgs.map((img) =>
          view === 'list' ? (
            <ListMode img={img} key={Math.random()} />
          ) : (
            <GridMode img={img} key={Math.random()} />
          ),
        )}
      </section>
      <LoadMore />
    </main>
  );
};

export default App;
