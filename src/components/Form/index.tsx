
import Input from '../Input/index';
import Button from '@/components/Button';
import { ICar } from '@/interface/car';
import { useState } from 'react';

type FormProps = {
  onAdd: (car:ICar) => void
}


const Form = ({onAdd}: FormProps) => {
  const [inputValue, setInputValue] = useState<string>("")

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return
    onAdd({
      id: Math.floor(Math.random() * 1000) + 1,
      name: inputValue
    })

  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
      <form  onSubmit={onHandleSubmit} className="flex justify-between py-2">
      <Input onChange={onChangeInput } />
      <Button type="danger" shape="default">
        ADD
          </Button>
    </form>
  )
}

export default Form