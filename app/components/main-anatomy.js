import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "@app/components/header";
import CustomFab from "@app/components/fab";
import { Container, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  }
}));

export default function MainAnatomy({ children, title, hasBackIcon, fab }) {
  const classes = useStyles();

  return (
    <div>
      <Header hasBackIcon={hasBackIcon} title={title} />
      {fab && (
        <CustomFab {...fab} />
      )}
      <Container className={classes.container}>
        <Grid item>
          <Paper>{children}</Paper>
        </Grid>
      </Container>
    </div>
  );
}
