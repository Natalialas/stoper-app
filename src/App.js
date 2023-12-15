import FormattedTime from './components/FormattedTime/FormattedTime'
import Container from './components/Container/Container'
import Button from './components/Button/Button';
import { useState, useEffect } from 'react';

const App = () => {

  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 100);
    }, 100))
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <FormattedTime time={time} />
      <Button onClick={startTimer}>START</Button>
      <Button onClick={stopTimer}>STOP</Button>
      <Button onClick={resetTimer}>RESET</Button>
    </Container>
  );
};

export default App;
