import type { IconProps } from "../../types/types.ts";

function GameIcon({ width, height }: IconProps) {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13L3 14L6 11H10L13 14L16 13L15.248 4.7284C15.1076 3.18316 13.812 2 12.2604 2H3.73964C2.18803 2 0.89244 3.18316 0.751964 4.72839L0 13ZM12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6ZM12 8C12 8.55228 11.5523 9 11 9C10.4477 9 10 8.55228 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8ZM5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z"
        fill="#000000"
      />
    </svg>
  );
}

export default GameIcon;
