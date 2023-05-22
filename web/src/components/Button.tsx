
interface ButtonProps {
  title: string
}

export const Button = (props: ButtonProps) => {

  return (
    <p>{props.title}</p>
  )

}

export default Button