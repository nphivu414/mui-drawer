import React from "react";
import { SheetContext, SheetProps } from "./SheetContext";

type SheetProviderProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onClose?: (open: boolean) => void;
  children: React.ReactNode;
};

export const SheetProvider = ({
  defaultOpen = false,
  open: controlledOpen,
  onClose,
  children,
}: SheetProviderProps) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;

  const open = isControlled ? controlledOpen : internalOpen;

  const handleOnClose = React.useCallback(() => {
    if (isControlled) {
      onClose?.(false);
    } else {
      setInternalOpen(false);
      onClose?.(false);
    }
  }, [onClose, isControlled]);

  const handleToggleSheet = () => {
    setInternalOpen(!internalOpen);
  };

  return (
    <SheetContext.Provider
      value={{
        open,
        onClose: handleOnClose,
        toggleSheet: handleToggleSheet,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
};
