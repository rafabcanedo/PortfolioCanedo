import { useForm } from 'react-hook-form'
import Input from '../Input/Input'

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log(data)
  }
  return (
    <div className="flex flex-col w-[390px] rounded-lg bg-[#2e2d2d] gap-4">
      <div className="flex flex-col items-center justify-center">
        <label className="dark:text-subtitle font-alt">Your name</label>
        <Input
          placeholder="Your name"
          type="text"
          {...register('name', { required: true })}
        />
        {errors?.name?.type === 'required' && (
          <p className="text-[#f95959]">Name is required.</p>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <label className="dark:text-subtitle font-alt">Title Message</label>
        <Input
          placeholder="Title"
          type="text"
          {...register('title', { required: true })}
        />
        {errors?.title?.type === 'required' && (
          <p className="text-[#f95959]">Title is required.</p>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <label className="dark:text-subtitle font-alt">Content Message</label>
        <textarea
          className="w-96 h-36 bg-gray text-nav dark:bg-[#363636] dark:text-subtitle rounded focus:borer-none focus:outline-none pl-2"
          placeholder="Message content"
          type="text"
          {...register('content', { required: true, minLength: 10 })}
        />
        {errors?.content?.type === 'minLength' && (
          <p className="text-[#f95959]">
            Content must have at least 7 characters.
          </p>
        )}
        {errors?.content?.type === 'required' && (
          <p className="text-[#f95959]">Content is required.</p>
        )}
      </div>
      <div className="flex justify-end mr-4 mb-2">
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
