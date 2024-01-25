import { Box, Typography } from "@mui/material";
import { FC } from "react";
import IconBox from "../../baseComponents/IconBox";
import { FaRegTrashAlt } from "react-icons/fa";
import theme from "../../../theme";

type Props = {
  name: string;
  image: string;
  price: number;
  count: number;
};

const CartItem: FC<Props> = ({ name, image, price, count }) => {
  return (
    <Box className="flex w-full items-center justify-between my-4">
      <Box className="flex w-full items-center gap-4">
        <img src={image} width={104} height={64} />
        <Typography variant="caption" fontSize={10}>
          X {count}
        </Typography>
        <Box>
          <Typography variant="body1" fontWeight={"bold"}>
            {name}
          </Typography>
          <Typography variant="caption" fontSize={10}>
            &{price}
          </Typography>
        </Box>
      </Box>
      <IconBox
        icon={<FaRegTrashAlt color={theme.palette.error.light} />}
        color="#FF00001A"
        size={44}
        borderRadius="12px"
      />
    </Box>
  );
};
export default CartItem;
