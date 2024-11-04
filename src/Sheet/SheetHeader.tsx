import { Box, Divider } from "@mui/material"
import React from "react"

type SheetHeaderProps = {
  children: React.ReactNode
}

export const SheetHeader = ({ children }: SheetHeaderProps) => {
  return (
    <Box sx={{
      width: '100%',
      height: 50,
      flex: "none",
      borderBottom: "1px solid #d4d4d4",
      display: "flex",
      alignItems: "center",
      position: "sticky",
      top: 0,
      px: 2,
      zIndex: 1,
      background: "white"
    }}>
      {children}
    </Box>
  )
}
