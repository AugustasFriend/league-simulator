import { FC } from "react";
import { Box, BoxProps } from "./Box";

interface ColumnProps extends BoxProps {}

export const Column: FC<ColumnProps> = (props) => <Box {...props}></Box>;
