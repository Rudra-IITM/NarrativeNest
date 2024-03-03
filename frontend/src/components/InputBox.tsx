
interface InputBoxProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputBox = ({label, placeholder, onChange, type}: InputBoxProps) => {
  return (
    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
    <input type={type} onChange={onChange} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
  )
}

export default InputBox