import { Box } from "@mui/material"
import React from "react"

type SheetFooterProps = {
  children: React.ReactNode
}

export const SheetFooter = ({ children }: SheetFooterProps) => {
  return (
    <Box  sx={{
      width: '100%',
      height: 50,
      flex: "none",
      borderTop: "1px solid #d4d4d4",
      display: "flex",
      alignItems: "center",
      position: "sticky",
      bottom: 0,
      px: 2,
      zIndex: 1,
      background: "white"
    }}>
      {children}
    </Box>
  )
}
