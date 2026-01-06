import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";
import { colors, chartColors } from "../../data/colors";
import {
  currentRate,
  targetRate,
  dcRange,
  usNationalRange,
} from "../../data/salaryData";

const data = [
  {
    name: "Your Current",
    value: currentRate.annual,
    type: "current",
  },
  {
    name: "Target (Low)",
    value: targetRate.annualMin,
    type: "target",
  },
  {
    name: "Target (High)",
    value: targetRate.annualMax,
    type: "target",
  },
  {
    name: "US 25th %ile",
    value: usNationalRange.percentile25,
    type: "market",
  },
  {
    name: "DC 25th %ile",
    value: dcRange.percentile25,
    type: "market",
  },
  {
    name: "DC Median",
    value: dcRange.median,
    type: "marketHighlight",
  },
];

const getBarColor = (type: string) => {
  switch (type) {
    case "current":
      return chartColors.salary.current;
    case "target":
      return chartColors.salary.target;
    case "marketHighlight":
      return colors.teal[600];
    default:
      return chartColors.salary.market;
  }
};

const formatValue = (value: number) => `$${(value / 1000).toFixed(0)}k`;

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { name: string; type: string } }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    return (
      <div
        style={{
          background: "white",
          padding: "0.75rem 1rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: `1px solid ${colors.gray[200]}`,
          fontFamily: "var(--font-body)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontWeight: 600,
            color: colors.gray[800],
            fontSize: "0.875rem",
          }}
        >
          {item.payload.name}
        </p>
        <p
          style={{
            margin: "0.25rem 0 0 0",
            color: getBarColor(item.payload.type),
            fontSize: "1.125rem",
            fontWeight: 600,
          }}
        >
          ${item.value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function SalaryComparisonChart() {
  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
          barSize={28}
        >
          <XAxis
            type="number"
            domain={[0, 140000]}
            tickFormatter={formatValue}
            tick={{
              fill: colors.gray[500],
              fontSize: 12,
              fontFamily: "var(--font-body)",
            }}
            axisLine={{ stroke: colors.gray[200] }}
            tickLine={{ stroke: colors.gray[200] }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{
              fill: colors.gray[700],
              fontSize: 13,
              fontFamily: "var(--font-body)",
            }}
            axisLine={false}
            tickLine={false}
            width={95}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: colors.gray[50] }} />
          <ReferenceLine
            x={dcRange.percentile25}
            stroke={colors.teal[300]}
            strokeDasharray="4 4"
            label={{
              value: "DC 25th",
              position: "top",
              fill: colors.teal[600],
              fontSize: 10,
              fontFamily: "var(--font-body)",
            }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.type)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
