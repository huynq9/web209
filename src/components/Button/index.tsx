

type ButtonProps = {
  type?: "primary" | "danger" | "default",
  shape?: "round" | "circle" | "default",
  onClick?: () => void
  children?: React.ReactNode
  icon?:React.ReactNode
}

const Button = ({type, shape, onClick,children,icon}: ButtonProps) => {
  return (
    <button onClick={onClick}
      className={`border border-black p-1
     ${type === 'primary' && "bg-blue-600 text-white"}
     ${type === 'danger' && "bg-red-600 text-white"}
     ${type === 'default' && ""}
     ${shape === 'round' && "rounded-full"}
     ${shape === 'circle' && "rounded-full w-10 h-10"}
     ${shape === 'default' && "rounded"}
    `}>
      {icon && icon}
      {children}</button>
  )
}

export default Button