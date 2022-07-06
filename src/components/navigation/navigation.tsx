import {FC} from "react";
import {Stack, MenuList, MenuItem} from "@mui/material";
import {NavLink} from "react-router-dom";

const Navigation: FC = () => {
  return (
      <Stack>
        <MenuList>
          <NavLink to="/bubble-sort">
            <MenuItem>
              Сортировка пузырьком
            </MenuItem>
          </NavLink>
          <NavLink to="/selection-sort">
            <MenuItem>Сортировка выбором

            </MenuItem>
          </NavLink>
          <NavLink to="/insertion-sort">
            <MenuItem>
              Сортировка вставками
            </MenuItem>
          </NavLink>
          <NavLink to="/merge-sort">
            <MenuItem>
              Сортировка слиянием
            </MenuItem>
          </NavLink>
          <NavLink to="/quick-sort">
            <MenuItem>
              Быстрая сортировка
            </MenuItem>
          </NavLink>
          <NavLink to="/block-sort">
            <MenuItem>
              Блочная сортировка
            </MenuItem>
          </NavLink>
        </MenuList>
      </Stack>
  );
};

export default Navigation;
