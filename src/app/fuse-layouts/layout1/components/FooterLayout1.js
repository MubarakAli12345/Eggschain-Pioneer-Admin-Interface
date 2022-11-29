import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import PurchaseButton from "app/fuse-layouts/shared-components/PurchaseButton";
import PoweredByLinks from "app/fuse-layouts/shared-components/PoweredByLinks";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(to right, " +
      theme.palette.primary.dark +
      " 0%, " +
      darken(theme.palette.primary.dark, 0.5) +
      " 100%)",
    color: theme.palette.primary.contrastText,
  },
}));

function FooterLayout1(props) {
  const classes = useStyles();
  const footerTheme = useSelector(({ fuse }) => fuse.settings.footerTheme);
  var date = new Date();
  var year = date.getFullYear();
  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar id="fuse-footer" className="classes.root relative z-10">
        <Toolbar className={clsx(classes.root, "px-16 py-0 flex items-center")}>
          <div className="flex flex-1">
            {/* <PurchaseButton/> */}© {year} Eggschain Inc. All rights
            reserved.
          </div>

          <div>{/* <PoweredByLinks/> */}</div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default FooterLayout1;
