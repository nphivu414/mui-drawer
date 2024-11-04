import Drawer from "@mui/material/Drawer";
import React from "react";

type DraweProps = React.ComponentPropsWithoutRef<typeof Drawer>
export type SheetProps = Omit<DraweProps, 'open' | 'onClose'>

type SheetContextType = {
  open: boolean;
  toggleSheet: () => void;
  onClose?: (open: boolean) => void;
};

export const SheetContext = React.createContext<SheetContextType | undefined>(
  undefined
);
