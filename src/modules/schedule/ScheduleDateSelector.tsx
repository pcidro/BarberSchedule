import { DatePickerLimit } from "@/app/utils/DatePickerLimit";

interface iScheduleDateSelector {
  agendaDate: string | null;
  onChange: React.Dispatch<React.SetStateAction<string | null>>;
}

const ScheduleDateSelector = ({
  agendaDate,
  onChange,
}: iScheduleDateSelector) => {
  const { min, max } = DatePickerLimit();

  return (
    <div className="flex flex-col">
      <div className="relative w-fit">
        <input
          type="date"
          value={agendaDate ?? ""}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          className="bg-zinc-900 border border-purple-500/50 text-zinc-100 p-2 lg:p-3 rounded-lg outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer text-sm input-date-custom"
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-500 pointer-events-none text-xs">
          ▼
        </span>
      </div>
    </div>
  );
};

export default ScheduleDateSelector;
