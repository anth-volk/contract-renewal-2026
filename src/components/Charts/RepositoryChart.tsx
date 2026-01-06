import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import { colors, chartColors } from "../../data/colors";
import { repos2025 } from "../../data/contributionData";

// Show ALL repos - no "Other" category
const data = repos2025.map((repo) => ({
  name: repo.name.replace("policyengine-", "").replace("-", "\n"),
  shortName: repo.name
    .replace("policyengine-", "")
    .replace("household-api", "hh-api")
    .replace("api-v2-alpha", "api-v2-a")
    .replace("autumn-budget-dashboard", "uk-budget"),
  value: repo.prs,
  fullName: repo.name,
  focus: repo.focus,
}));

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      value: number;
      fullName: string;
      focus: string;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
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
          {item.fullName}
        </p>
        <p
          style={{
            margin: "0.25rem 0",
            color: colors.teal[600],
            fontSize: "1.125rem",
            fontWeight: 600,
          }}
        >
          {item.value} PRs
        </p>
        <p
          style={{
            margin: "0.25rem 0 0 0",
            color: colors.gray[500],
            fontSize: "0.8125rem",
          }}
        >
          {item.focus}
        </p>
      </div>
    );
  }
  return null;
};

export function RepositoryChart() {
  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 60 }}
        >
          <XAxis
            dataKey="shortName"
            tick={{
              fontSize: 9,
              fill: colors.gray[600],
              fontFamily: "var(--font-body)",
            }}
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
          />
          <YAxis
            tick={{
              fontSize: 11,
              fill: colors.gray[500],
              fontFamily: "var(--font-body)",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  chartColors.repositories[
                    index % chartColors.repositories.length
                  ]
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
