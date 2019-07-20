import React, {
  createElement as CE,
  useContext,
  useMemo,
  FC,
  memo,
  useRef
} from "react";
import { scaleLinear, ScaleLinear } from "d3-scale";
import { AppContext, getLines, getCars, getKDots, getQDots } from "src/ducks";
import * as params from "src/params";
import * as colors from "@material-ui/core/colors";
import makeStyles from "@material-ui/styles/makeStyles";
import mo from "memoize-one";
import TexLabel from "src/components/TexLabel";
import useElementSize from "src/useElementSizeHook";
import Arrow from "src/components/Arrow";

const M = {
    top: 25,
    bottom: 30,
    left: 20,
    right: 10
  },
  gTranslate = `translate(${M.left},${M.top})`;

const memoizedvalues = mo((width, height) => ({
  tScale: scaleLinear()
    .range([0, width])
    .domain([0, params.cycle]),
  xScale: scaleLinear()
    .range([height, 0])
    .domain([0, params.total])
}));

type LinesProps = {
  xScale: ScaleLinear<number, number>;
  tScale: ScaleLinear<number, number>;
  k: number;
  lineClass: string;
};
const Lines = React.memo(({ xScale, tScale, k, lineClass }: LinesProps) => (
  <g id="g-lines">
    {getLines(k).map(({ x1, x0, t1, t0 }, i) => (
      <path
        key={i}
        d={`M${tScale(t0)},${xScale(x0)}L${tScale(t1)},${xScale(x1)}`}
        className={lineClass}
      />
    ))}
  </g>
));

const marginer = ({ width, height }: { width: number; height: number }) => ({
  width: Math.max(width - M.left - M.right, 0),
  height: Math.max(height - M.top - M.bottom, 0)
});
const EMPTY = {};
export default () => {
  const { state } = useContext(AppContext),
    containerRef = useRef<HTMLDivElement>(),
    { width, height } = marginer(useElementSize(containerRef)),
    classes = useStyles(EMPTY),
    { tScale, xScale } = memoizedvalues(width, height),
    [carLength, carWidth] = useMemo(() => {
      return [
        height - xScale(params.carLength),
        height - xScale(params.carWidth)
      ];
    }, [xScale]);
  return (
    <div ref={containerRef} className={classes.container}>
      <svg className={classes.svg}>
        <Arrow />
        <g transform={gTranslate}>
          <mask id="myMask2">
            <rect width={width} height={height} fill="white" />
          </mask>
          <g id="g-masked" mask="url(#myMask2)">
            {CE(Lines, { xScale, tScale, k: state.k, lineClass: classes.line })}
            <g id="g-cut">
              <rect
                className={classes.cut}
                width={tScale(params.T)}
                height={height - xScale(params.X)}
                y={xScale(params.xCut + params.X)}
                x={tScale(params.tCut)}
              />
              {getKDots(state.k).map((x, i) => (
                <circle
                  key={i}
                  className={classes.kdot}
                  r="3"
                  cx={tScale(params.tCut)}
                  cy={xScale(x)}
                />
              ))}
              {getQDots(state.k).map((t, i) => (
                <circle
                  key={i}
                  className={classes.kdot}
                  r="3"
                  cy={xScale(params.xCut)}
                  cx={tScale(t)}
                />
              ))}
            </g>
            <g id="g-lane" transform={`translate(${tScale(state.time)},0)`}>
              {CE("path", {
                className: classes.road,
                strokeWidth: height - xScale(params.roadWidth),
                d: `M0,0L0,${height}`
              })}
              <g id="g-cars">
                {getCars(state.k, state.time).map((x, i) => (
                  <rect
                    key={i}
                    className={classes.car}
                    y={xScale(x)}
                    x={-carWidth / 2}
                    height={carLength}
                    width={carWidth}
                  />
                ))}
              </g>
            </g>
          </g>
          <g id="vaxis">
            <path
              d={`M0,0L0,${height}`}
              fill="none"
              stroke="black"
              markerStart="url(#arrow)"
            />
            <TexLabel dx={-10} dy={-25} latexstring="x \; \text{(m)}" />
          </g>

          <g transform={`translate(0,${height})`} id="taxis">
            <path
              d={`M0,0L${width},0`}
              fill="none"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <TexLabel dx={width - 15} dy={5} latexstring="t \; \text{(s)}" />
          </g>
        </g>
      </svg>
    </div>
  );
};

const useStyles = makeStyles({
  path: {
    strokeWidth: "4px",
    fill: "none",
    stroke: colors.lightBlue["A700"],
    opacity: 0.8
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  line: {
    strokeWidth: "1px",
    stroke: colors.lightBlue["A400"]
  },
  svg: {
    width: "100%",
    height: "100%",
    "& text": {
      fontFamily: "Puritan, san-serif",
      fontSize: "11px"
    }
  },
  cut: {
    stroke: colors.grey["700"],
    strokeWidth: "2px",
    fill: colors.green["A200"],
    fillOpacity: 0.3
  },
  car: {
    fill: colors.purple["A400"],
    stroke: "none"
  },
  masked: {
    mask: "url(#myMask2)"
  },
  road: {
    stroke: colors.grey["300"]
    // opacity: .95
  },
  kdot: {
    fill: colors.pink.A400,
    stroke: "white",
    strokeWidth: "2px"
  },
  text: {
    textAlign: "center",
    fontSize: "10px"
  }
});
