import {FC} from "react";
import {Box, Typography} from "@mui/material";

const Header: FC = () => {
  return (
    <Box>
      <Typography variant="h5" component="h1">
        Визуализатор алгоритмов сортировки
      </Typography>
    </Box>
  );
};

export default Header;
