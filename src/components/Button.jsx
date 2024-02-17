export default function Button({ children, Icon }) {
  return (
    <button className="flex h-10 items-center justify-center bg-mainBlack text-white p-2 px-4 rounded-md w-fit">
      {children}
      {Icon && <Icon className="ml-2 w-auto" />}
    </button>
  );
}
