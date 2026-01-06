import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { colors } from "../../data/colors";
import { yearComparisonData } from "../../data/contributionData";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
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
            marginBottom: "0.5rem",
          }}
        >
          {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{
              margin: "0.25rem 0",
              color: entry.color,
              fontSize: "0.9375rem",
            }}
          >
            {entry.dataKey === "year2024" ? "2024" : "2025"}:{" "}
            <strong>{entry.value.toLocaleString()}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ContributionChart() {
  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <BarChart
          data={yearComparisonData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barGap={4}
        >
          <XAxis
            dataKey="metric"
            tick={{
              fill: colors.gray[600],
              fontSize: 12,
              fontFamily: "var(--font-body)",
            }}
            axisLine={{ stroke: colors.gray[200] }}
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: colors.gray[500],
              fontSize: 11,
              fontFamily: "var(--font-body)",
            }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) =>
              value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value
            }
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: colors.gray[50] }} />
          <Legend
            wrapperStyle={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
            }}
          />
          <Bar
            dataKey="year2024"
            name="2024"
            fill={colors.teal[300]}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="year2025"
            name="2025"
            fill={colors.teal[600]}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
