import { Input } from '../Elementi/Input';
import { Label } from '../Elementi/Label';

interface ILabelledInput {
  label?: any;
  input?: any;
}

export default function LabelledInput({ label, input }: ILabelledInput) {
  return (
    <>
      <Label {...label} />
      <Input {...input} />
    </>
  );
}
