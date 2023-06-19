type Props = {
  width?: number;
  height?: number;
};

export default function Logo({ width = 186, height = 30 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <text
        style={{
          fill: "#f9a31a",
          fontSize: "34px",
          fontFamily: "Verdana, Verdana",
        }}
        transform="translate(0 26.92)"
      >
        <tspan x="0" y="0">
          turistik
        </tspan>
      </text>
      <text
        style={{
          fill: "#86cdea",
          fontSize: "34px",
          fontFamily: "Verdana, Verdana",
        }}
        transform="translate(118.86 27.08)"
      >
        <tspan x="0" y="0">
          rota
        </tspan>
      </text>
    </svg>
  );
}
