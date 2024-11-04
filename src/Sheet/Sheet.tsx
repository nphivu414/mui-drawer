import React from "react";
import { styled, Theme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSheet } from "./context/useSheet";

const drawerWidth = 320;
type StyledDrawerProps = {
  open?: boolean;
  variant?: SheetProps["variant"];
  isMobile?: boolean;
};
const StyledDrawer = styled(Drawer, {
  shouldForwardProp: () => true,
})<StyledDrawerProps>(({ theme, open, variant, isMobile }) => {
  const sheetHeight = isMobile ? 'auto' : '100%'
  const sheetMaxHeight = isMobile ? '50%' : '100%'
  let sheetWidth = isMobile ? '100%' : drawerWidth
  if (variant === "persistent") {
    sheetWidth = open ? drawerWidth : 0
  }

  return {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: sheetWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      height: sheetHeight,
      maxHeight: sheetMaxHeight,
      width: sheetWidth,
      boxSizing: "border-box",
    },
    ...(open && {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }
});

type DraweProps = React.ComponentPropsWithoutRef<typeof Drawer>;
type SheetProps = Omit<DraweProps, "open" | "onClose">;

export const Sheet = React.forwardRef<
  React.ElementRef<typeof Drawer>,
  SheetProps
>(function Sheet({ variant = "temporary", anchor, children, ...rest }, ref) {
  console.log("🚀 ~ anchor:", anchor);
  const { open, onClose } = useSheet();
  const [currentAnchor, setCurrentAnchor] =
    React.useState<SheetProps["anchor"]>(anchor);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  React.useEffect(() => {
    setCurrentAnchor(isMobile ? "bottom" : anchor);
  }, [isMobile, anchor]);

  return (
    <StyledDrawer
      ref={ref}
      open={open}
      onClose={onClose}
      anchor={currentAnchor}
      variant={isMobile ? "temporary" : variant}
      isMobile={isMobile}
      {...rest}
    >
      {children}
    </StyledDrawer>
  );
});
