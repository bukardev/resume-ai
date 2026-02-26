import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let bgClass = "";
  let textClass = "";
  let label = "";

  if (score > 70) {
    bgClass = "bg-badge-green";
    textClass = "text-green-600";
    label = "Strong";
  } else if (score > 49) {
    bgClass = "bg-badge-yellow";
    textClass = "text-yellow-600";
    label = "Good Start";
  } else {
    bgClass = "bg-badge-red";
    textClass = "text-red-600";
    label = "Needs Work";
  }

  return (
    <div
      className={`inline-block px-2 py-1 rounded-full ${bgClass} ${textClass} text-xs font-semibold`}
    >
      <p>{label}</p>
    </div>
  );
};

export default ScoreBadge;
