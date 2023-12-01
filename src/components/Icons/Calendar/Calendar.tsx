const Calendar = ({ isSelected }: IconProps) => {
  const gradientColor = isSelected ? 'url(#paint0_linear_calendar_selected)' : '#6F6F6F'

  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paint0_linear_calendar_selected" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#48409E" />
          <stop offset="1" stopColor="#5142F1" />
        </linearGradient>
      </defs>

      <path d="M19.0625 11.1875H16.4375V13.8125H19.0625V11.1875Z" fill={gradientColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.9375 2H7.25V3.3125H17.75V2H19.0625V3.3125H21.6875H23V4.625V21.6875V23H21.6875H3.3125H2V21.6875V4.625V3.3125H3.3125H5.9375V2ZM21.6875 4.625H3.3125V21.6875H21.6875V4.625Z"
        fill={gradientColor}
      />
      <path d="M19.7188 6.59375H5.28125V9.21875H19.7188V6.59375Z" fill={gradientColor} />
    </svg>
  )
}

export default Calendar
