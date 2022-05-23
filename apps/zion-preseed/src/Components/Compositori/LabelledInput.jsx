import { Input } from "../Elementi/Input"
import { Label } from "../Elementi/Label"

export default function LabelledInput({
  label,
  input
}) {
  return (
    <>
      <Label {...label}/>
      <Input {...input}
      />
    </>
  )
}
