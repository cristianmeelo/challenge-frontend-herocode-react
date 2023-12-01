const Dashboard = ({ isSelected }: IconProps) => {
  const gradientColor = isSelected ? 'url(#paint0_linear_1_36_selected)' : '#6F6F6F'

  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paint0_linear_1_36_selected" x1="1.99994" y1="12.9999" x2="22.9999" y2="12.9999" gradientUnits="userSpaceOnUse">
          <stop stopColor="#48409E" />
          <stop offset="1" stopColor="#5142F1" />
        </linearGradient>
      </defs>

      <path
        d="M22.9166 20.8333H11.4583V13.5416H22.9166V20.8333ZM9.37498 20.8333H2.08331V13.5416H9.37498V20.8333ZM22.9166 11.4583H2.08331V4.16663H22.9166V11.4583Z"
        fill={gradientColor}
      />
    </svg>
  )
}

export default Dashboard
