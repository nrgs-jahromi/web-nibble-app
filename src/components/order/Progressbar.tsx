import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface ProgressBarProps {
  width: number;
  totalTime: number;
  start: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  width,
  totalTime,
  start,
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    const startTimer = () => {
      timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return oldProgress;
          }
          const diff = (100 / totalTime) * 0.5;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
    };

    const stopTimer = () => {
      clearInterval(timer);
    };

    if (start) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => {
      stopTimer();
    };
  }, [totalTime, start]);

  return (
    <Box
      sx={{
        width: `${width}%`,
        marginTop: "20px",
      }}
    >
      <LinearProgress
        color="secondary"
        variant="buffer"
        sx={{ height: "5px", borderRadius: "15px" }}
        value={progress}
      />
    </Box>
  );
};

export default ProgressBar;
