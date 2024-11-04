import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { Sheet } from "./Sheet";
import { SheetProvider } from "./Sheet/context/SheetProvider";
import { SheetContent } from "./Sheet/SheetContent";
import { SheetFooter } from "./Sheet/SheetFooter";
import { SheetHeader } from "./Sheet/SheetHeader";
import { SheetLayout } from "./Sheet/SheetLayout";
import { SheetMainContainer } from "./Sheet/SheetMainContainer";
import { Home } from "./Home";

export default function App() {
  return (
    <SheetProvider>
      <SheetLayout>
        <Sheet variant="temporary" anchor="left">
          <SheetHeader>Header</SheetHeader>
          <SheetContent>
            <div>test</div>
          </SheetContent>
          <SheetFooter>Footer</SheetFooter>
        </Sheet>
        <SheetMainContainer>
          <Home />
        </SheetMainContainer>
      </SheetLayout>
    </SheetProvider>
  );
}
