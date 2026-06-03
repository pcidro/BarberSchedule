"use client";
import Appointments from "@/context/AppointmentsContext";
import useScheduling from "@/app/hooks/useScheduling";
import ClientInput from "./ClientInput";
import DatePicker from "./DatePicker";
import TimeSlot from "./TimeSlot";

const SchedulingForm = () => {
  const {
    dateSelected,
    hourSelected,
    clientName,
    setClientName,
    setDateSelected,
    setHourSelected,
    buildAppointment,
    reset,
    isValid,
    submitted,
    setSubmitted,
  } = useScheduling();

  const { bookAppointment } = Appointments();

  function handleSubmit() {
    setSubmitted(true);
    if (!isValid) return;

    const newAppointment = buildAppointment();
    bookAppointment(newAppointment);
    reset();
  }

  return (
    <div className="mt-5 w-full max-w-xl mx-auto px-4 py-2">
      <h1 className="text-3xl font-bold mb-2 text-zinc-100">
        Agende um atendimento
      </h1>
      <p className="text-zinc-400 mb-8">
        Selecione data e a hora desejados e informe o nome do cliente
      </p>

      <DatePicker
        value={dateSelected}
        onChange={setDateSelected}
        error={submitted && !dateSelected ? "Selecione uma data" : undefined}
      />

      <TimeSlot
        selectedDate={dateSelected}
        selectedHour={hourSelected}
        setSelectedHour={setHourSelected}
        error={submitted && !hourSelected ? "Selecione um horário" : undefined}
      />

      <ClientInput
        value={clientName}
        onChange={setClientName}
        error={submitted && !clientName ? "Informe um nome" : undefined}
      />

      <button
        onClick={handleSubmit}
        className={`w-full text-white font-bold uppercase py-3 px-4 rounded-lg transition-all duration-200 shadow-lg active:scale-[0.98] ${
          !isValid
            ? "bg-gray-400 cursor-not-allowed opacity-70"
            : "bg-purple-600 hover:bg-purple-700 cursor-pointer shadow-purple-500/20"
        }`}
      >
        Agendar
      </button>
    </div>
  );
};

export default SchedulingForm;
