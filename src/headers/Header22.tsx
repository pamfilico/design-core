import * as React from "react";
import Box from "@mui/material/Box";

export interface Header22Props {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

/**
 * Inline page header row (no AppBar): left and centre slots, and a right slot pushed
 * to the end with a small gap — e.g. page actions followed by an install icon.
 */
export function Header22({ left, center, right, mt = 0, mb = 0, ml = 0, mr = 0 }: Header22Props) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flex={1} mt={mt} mb={mb} ml={ml} mr={mr}>
      <Box display="flex" alignItems="center">
        {left}
      </Box>
      <Box display="flex" alignItems="center">
        {center}
      </Box>
      <Box display="flex" alignItems="center" gap={1} marginLeft="auto">
        {right}
      </Box>
    </Box>
  );
}

export default Header22;
