import { DatePickerLimit } from "@/utils/DatePickerLimit";

interface IPropsDatePicker {
  value: string | null;
  onChange: React.Dispatch<React.SetStateAction<string | null>>;
  error: string | undefined;
}

const DatePicker = ({ value, onChange, error }: IPropsDatePicker) => {
  const { min, max } = DatePickerLimit();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-zinc-200 mb-4">Data</h2>
      <div className="relative w-fit">
        <input
          type="date"
          className=" input-date-custom border bg-zinc-800 border-zinc-700  text-zinc-100 p-3 rounded-lg outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
        />
        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-zinc-500 ">
          ▼
        </span>
      </div>
      {error && <span className="text-red-400 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default DatePicker;
