import { FC, ReactNode } from "react";
import { Box } from "@mui/system";

interface IconBoxProps {
  color: string;
  borderRadius: string;
  size: number;
  icon: ReactNode;
}

const IconBox: FC<IconBoxProps> = ({ color, borderRadius, size, icon }) => {
  return (
    <Box
      minWidth={size}
      minHeight={size}
      sx={{
        bgcolor: color,
        borderRadius: borderRadius,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: size * 0.5, // Adjust the font size based on the icon size
      }}
    >
      {icon}
    </Box>
  );
};

export default IconBox;
