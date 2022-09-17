import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className='bg-zinc-900 py-3 px-4 mb-4 rounded placeholder:text-zinc-500'
    />
  )
}