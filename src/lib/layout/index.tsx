import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Box margin="8">
        <Header title={title} />
        <Box as="main" marginY={22}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
