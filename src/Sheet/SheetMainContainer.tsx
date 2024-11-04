import { styled } from '@mui/material/styles';
import React from "react";

type SheetMainContainerProps = {
  children: React.ReactNode;
};

const Main = styled("main")(({ theme }) => {
  return {
    flexGrow: 1,
    padding: theme.spacing(3),
  };
});

export const SheetMainContainer = ({ children }: SheetMainContainerProps) => {
  return (
    <Main>
      {children}
    </Main>
  );
};
