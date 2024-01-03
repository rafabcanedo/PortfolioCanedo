import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import Button from '../Button/index'

export function Form() {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    console.log(data)
  }
  return (
    <div className="flex flex-col w-[390px] rounded-lg bg-[#2e2d2d] gap-4">
      <div className="flex flex-col">
        <label className="dark:text-subtitle font-alt">Your name</label>
        <Input placeholder="Your name" type="text" {...register('name')} />
      </div>
      <div className="flex flex-col">
        <label className="dark:text-subtitle font-alt">Title Message</label>
        <Input placeholder="Title" type="text" {...register('title')} />
      </div>
      <div className="flex flex-col">
        <label className="dark:text-subtitle font-alt">Content Message</label>
        <textarea
          className="w-96 h-36 bg-gray text-nav dark:bg-[#363636] dark:text-subtitle rounded focus:borer-none focus:outline-none pl-2"
          placeholder="Message content"
          type="text"
          {...register('content')}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="h-10 w-32 bg-primary hover:bg-[#42b883]"
          onClick={() => handleSubmit(onSubmit)()}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
