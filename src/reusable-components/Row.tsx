import { FC } from "react";
import { Box, BoxProps } from "./Box";

interface RowProps extends BoxProps {}

export const Row: FC<RowProps> = (props) => <Box row {...props}></Box>;
