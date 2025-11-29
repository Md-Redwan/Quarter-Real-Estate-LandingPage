import React, { useEffect, useState } from "react";

const CounterNumber = ({ values }) => {
  const [counts, setCounts] = useState(values.map(() => 0));

  useEffect(() => {
    const intervals = values.map((target, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < target) {
            newCounts[index]++;
          }
          return newCounts;
        });
      }, 40);
    });

    return () => intervals.forEach(clearInterval);
  }, [values]);

  return (
    <div>
      {counts.map((count, i) => (
        <span key={i} className="count">
          {count}
        </span>
      ))}
    </div>
  );
};

export default CounterNumber;


