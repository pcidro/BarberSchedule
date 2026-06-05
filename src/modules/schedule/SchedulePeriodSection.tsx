import Image from "next/image";
import ScheduleCard from "./ScheduleCard";
import { Appointment } from "@/types/appointment";

interface IPeriodSection {
  morningAppointments: Appointment[];
  afternoonAppointments: Appointment[];
  eveningAppointments: Appointment[];
}

const SchedulePeriodSection = ({
  morningAppointments,
  afternoonAppointments,
  eveningAppointments,
}: IPeriodSection) => {
  const PERIODS = [
    {
      label: "Manhã",
      range: "9h-12h",
      icon: "/svg/sun.svg",
      appointments: morningAppointments,
    },
    {
      label: "Tarde",
      range: "13h-18h",
      icon: "/svg/coffe.svg",
      appointments: afternoonAppointments,
    },
    {
      label: "Noite",
      range: "19h-21h",
      icon: "/svg/moon.svg",
      appointments: eveningAppointments,
    },
  ];

  console.log(morningAppointments);

  return (
    <ul className="flex flex-col gap-6">
      {PERIODS.map(({ label, range, icon, appointments }) => (
        <li
          key={label}
          className="overflow-hidden rounded-xl border border-zinc-800 shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-800/50 px-4 py-3">
            <div className="flex items-center gap-3">
              <Image
                src={icon}
                alt={label}
                width={20}
                height={20}
                className="opacity-80"
              />
              <span className="text-sm font-bold uppercase tracking-wider text-zinc-200">
                {label}
              </span>
            </div>

            <span className="rounded bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-500">
              {range}
            </span>
          </div>

          <div className="bg-[#12121a] px-4 py-6">
            {appointments.length === 0 && (
              <p className="text-center text-sm italic text-zinc-600">
                Nenhum agendamento para este período
              </p>
            )}

            {appointments.map((appointment) => (
              <ScheduleCard
                key={appointment.id}
                clientName={appointment.clientName}
                appointmentTime={appointment.time}
                appointmentId={appointment.id}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SchedulePeriodSection;
