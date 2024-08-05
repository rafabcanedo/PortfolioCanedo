export function StackPrev({ icon: Icon, text }) {
  return (
    <div className="flex flex-row items-center">
      <Icon size={20} color="#36dc81" />
      <p className="cursor-pointer hover:text-primary">{text}</p>
    </div>
  )
}
