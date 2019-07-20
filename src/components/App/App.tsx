import React, {
  FunctionComponent,
  useContext,
  useReducer,
  useCallback,
  FormEvent
} from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useTimer } from "src/useTimerHook";
import * as params from "src/params";
import {
  AppContext,
  reducer,
  initialState,
  ActionTypes as AT
} from "src/ducks";
// import SpaceTime from "src/components/SpaceTime";
// import useStyles from "./styleApp";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import * as colors from "@material-ui/core/colors";
import makeStyles from "@material-ui/styles/makeStyles";
import { Grid } from "@material-ui/core";
import SpaceTime from "../SpaceTime";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Typography as Text } from "@material-ui/core";
import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";
import Slider from "@material-ui/core/Slider";

const StyleSlider = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.main,
    marginBottom: "15px"
  }
}))(Slider);

const EMPTY = {};
const App: FunctionComponent<{}> = () => {
  const { state, dispatch } = useContext(AppContext),
    { play } = state,
    classes = useStyles(EMPTY);

  useTimer((dt: number) => {
    dt /= params.delta;
    dispatch({ type: AT.TICK, payload: dt });
  }, play);

  return (
    <Grid
      direction="column"
      container
      className={classes.main}
      alignItems="stretch"
      spacing={3}
    >
      <Grid item>
        <Paper elevation={2} className={classes.paper}>
          <Button
            component="div"
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: AT.SET_PLAY, payload: !play })}
          >
            {play ? "PAUSE" : "PLAY"}
          </Button>
          <div className={classes.sliderLabel}>
            <TeX math="k \; \text{(veh/km)}" /> density
          </div>
          <StyleSlider
            component="div"
            onChange={(e, payload: number) =>
              dispatch({ type: AT.SET_K, payload })
            }
            value={state.k}
            step={params.kj / 100}
            min={0}
            max={params.kj}
          />
          <div className={classes.sliderLabel}>
            <TeX math="t \; (s)" /> time
          </div>
          <StyleSlider
            component="div"
            onChange={(e, payload: number) =>
              dispatch({ type: AT.SET_TIME, payload })
            }
            value={state.time}
            step={params.cycle / 300}
            min={0}
            max={params.cycle}
          />
        </Paper>
      </Grid>
      <Grid item className={classes.spaceTimeContainer}>
        <SpaceTime />
      </Grid>
      {/* <SpaceTime /> */}
    </Grid>
  );
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <App />
    </AppContext.Provider>
  );
};

const useStyles = makeStyles({
  "@global": {
    body: {
      margin: "0 !important",
      padding: "0 !important",
      fontFamily: " 'Puritan', sans-serif",
      color: colors.grey["800"]
    },
    ".katex": {
      fontSize: "1em"
    }
  },
  spaceTimeContainer: {
    height: "450px"
  },
  main: {
    maxWidth: "700px",
    margin: "0 auto"
  },
  sliderLabel: {
    fontSize: "14px",
    marginTop: "5px"
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px 30px"
  },
  button: {
    margin: "5px"
  },
  sliderContainer: {
    width: "300px",
    padding: "20px",
    boxSizing: "border-box"
  }
});
