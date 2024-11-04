import * as React from "react";
import { Sheet } from "./Sheet";
import { SheetProvider } from "./Sheet/context/SheetProvider";
import { SheetContent } from "./Sheet/SheetContent";
import { SheetFooter } from "./Sheet/SheetFooter";
import { SheetHeader } from "./Sheet/SheetHeader";
import { SheetLayout } from "./Sheet/SheetLayout";
import { SheetMainContainer } from "./Sheet/SheetMainContainer";
import { Home } from "./Home";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

export default function App() {
  return (
    <SheetProvider>
      <SheetLayout>
        {/* <Sheet variant="persistent" anchor="left">
          <SheetHeader>Header</SheetHeader>
          <SheetContent>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </SheetContent>
          <SheetFooter>Footer</SheetFooter>
        </Sheet> */}
        <SheetMainContainer>
          <Home />
        </SheetMainContainer>
        <Sheet variant="temporary" anchor="right">
          <SheetHeader>Header</SheetHeader>
          <SheetContent>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </SheetContent>
          <SheetFooter>Footer</SheetFooter>
        </Sheet>
      </SheetLayout>
    </SheetProvider>
  );
}
