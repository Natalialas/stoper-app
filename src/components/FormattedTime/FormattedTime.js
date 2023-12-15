import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {

    const hours = Math.floor(milliseconds / 3600000);
    milliseconds %= 3600000;
    const minutes = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;
    const seconds = Math.floor(milliseconds / 1000);
    milliseconds %= 1000;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds).padStart(1, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  };

  return (
    <div className={styles.formattedTime}>
        {formatTime(time)}
    </div>
  );
};

export default FormattedTime;