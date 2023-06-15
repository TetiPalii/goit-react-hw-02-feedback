export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>total:{total}</p>
      <p>
        positive feedback:
        {Math.ceil(positivePercentage)}%
      </p>
    </>
  );
};

export default Statistics;
