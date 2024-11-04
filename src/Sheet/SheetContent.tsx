import React from "react"

type SheetContentProps = {
  children: React.ReactNode
}

export const SheetContent = ({ children }: SheetContentProps) => {
  return (
    <div>
      {children}
    </div>
  )
}
