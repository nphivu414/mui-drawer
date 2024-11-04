import { Box } from "@mui/material"
import React from "react"

type SheetContentProps = {
  children: React.ReactNode
}

export const SheetContent = ({ children }: SheetContentProps) => {
  return (
    <Box  sx={{
      flexGrow: 1
    }}>
      {children}
    </Box>
  )
}
