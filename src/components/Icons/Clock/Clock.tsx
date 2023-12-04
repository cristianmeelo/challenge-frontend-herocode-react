import { useTheme } from '@emotion/react';

const Clock = ({ isOverdue }: IconProps) => {
  const theme = useTheme();

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
        fill={isOverdue ? theme.colors.semantic.error.red_200 : theme.colors.neutral.gray_400}
      />
      <path d="M13 7H11V13H17V11H13V7Z" fill={isOverdue ? theme.colors.semantic.error.red_200 : theme.colors.neutral.gray_400} />
    </svg>
  );
};
export default Clock;