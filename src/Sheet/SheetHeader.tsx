import React from "react"

type SheetHeaderProps = {
  children: React.ReactNode
}

export const SheetHeader = ({ children }: SheetHeaderProps) => {
  return (
    <div>
      {children}
    </div>
  )
}
