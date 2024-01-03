export default function Input({ placeholder }) {
  return (
    <div>
      <input
        className="h-8 w-52 bg-gray text-nav dark:bg-[#363636] dark:text-subtitle rounded focus:borer-none focus:outline-none pl-2"
        placeholder={placeholder}
      />
    </div>
  )
}
