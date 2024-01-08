import { useEffect, useState } from "react";
const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval has been set up");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the Interval");
    };
  }, []);

  return (
    <p className="lead">
      This is the current time : {time.toLocaleDateString()} - {"  "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
