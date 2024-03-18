import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export default function Home({ changeTheme, theme }) {
  return (
    <Box p={4}>
      <Menu>
        <MenuButton as={Button} bg={'gray'}>{theme}</MenuButton>
        <MenuList>
          <MenuItem onClick={() => changeTheme("light")}>Light</MenuItem>
          <MenuItem onClick={() => changeTheme("dark")}>Dark</MenuItem>
          <MenuItem onClick={() => changeTheme("black")}>Black</MenuItem>
        </MenuList>
      </Menu>
      <Text>Test text</Text>
    </Box>
  );
}
