import { Box } from '@mui/material';
import React from 'react';

type SheetLayoutProps = {
  children: React.ReactNode
}

export const SheetLayout = ({ children }: SheetLayoutProps) => {
  return (
    <Box sx={{
      display: "flex"
    }}>
      {children}
    </Box>
  )
}
