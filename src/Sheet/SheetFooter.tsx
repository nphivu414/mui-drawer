import React from "react"

type SheetFooterProps = {
  children: React.ReactNode
}

export const SheetFooter = ({ children }: SheetFooterProps) => {
  return (
    <div>
      {children}
    </div>
  )
}
