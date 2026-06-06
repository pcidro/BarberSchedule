"use client";
import useAgenda from "@/hooks/useAgenda";
import ScheduleDateSelector from "./ScheduleDateSelector";
import SchedulePeriodSection from "./SchedulePeriodSection";

const SchedulePanel = () => {
  const {
    eveningAppointments,
    morningAppointments,
    agendaDate,
    setAgendaDate,
    afternoonAppointments,
  } = useAgenda();

  return (
    <div className="py-2">
      <div className="relative flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-purple-500">Agenda</h1>
          <p className="text-zinc-400">
            Consulte os seus cortes de cabelo agendados
          </p>
        </div>
        <ScheduleDateSelector
          agendaDate={agendaDate}
          onChange={setAgendaDate}
        />
      </div>

      <SchedulePeriodSection
        morningAppointments={morningAppointments}
        eveningAppointments={eveningAppointments}
        afternoonAppointments={afternoonAppointments}
      />
    </div>
  );
};

export default SchedulePanel;
