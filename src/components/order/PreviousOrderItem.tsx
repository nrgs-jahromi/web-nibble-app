import { Box, Typography } from "@mui/material";

interface Props {
  count: number;
  name: string;
}

const PreviousOrderItem: React.FC<Props> = ({ count, name }) => {
  return (
    <Box className="flex flex-row justify-start items-center gap-3 ">
      <Box className="size-6 bg-white flex justify-center items-center text-neutral-500 rounded-sm">
        {count}
      </Box>
      <Typography variant="body1" fontWeight={"bold"}>
        {name}
      </Typography>
    </Box>
  );
};
export default PreviousOrderItem;
