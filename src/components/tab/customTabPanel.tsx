
export const CustomTabPanel = (props) => {
  const { children, value, index, bgPanel, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      key={index}
    >
      {value === index && (
        <div className={`${bgPanel || 'bg-white'} mt-3`}>
          {children}
        </div>
      )}
    </div>
  )
}


