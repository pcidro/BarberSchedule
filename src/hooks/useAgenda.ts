"use client";
import { useEffect, useState } from "react";
import Appointments from "@/context/AppointmentsContext";
import TransformDataToDateInputValue from "@/utils/TransformDataToString";
import { Period } from "@/types/appointment";
import { TIME_SLOTS } from "@/utils/TimeSlots";

const useAgenda = () => {
  function getPeriod(hourSelected: string): Period {
    if (TIME_SLOTS.morning.includes(hourSelected)) {
      return "morning";
    } else if (TIME_SLOTS.afternoon.includes(hourSelected)) {
      return "afternoon";
    } else if (TIME_SLOTS.evening.includes(hourSelected)) {
      return "evening";
    }
    throw new Error("Horário inválido");
  }

  const [agendaDate, setAgendaDate] = useState<string | null>(
    TransformDataToDateInputValue(new Date()),
  );
  const { appointments, setAppointments } = Appointments();

  useEffect(() => {
    if (!agendaDate) {
      return;
    }

    async function loadAppointments() {
      const response = await fetch(`/api/appointments?date=${agendaDate}`);
      const data = await response.json();
      setAppointments(data);
    }
    loadAppointments();
  }, [agendaDate, setAppointments]);

  const morningAppointments = appointments.filter(
    (appointment) => getPeriod(appointment.time) === "morning",
  );

  const afternoonAppointments = appointments.filter(
    (appointment) => getPeriod(appointment.time) === "afternoon",
  );

  const eveningAppointments = appointments.filter(
    (appointment) => getPeriod(appointment.time) === "evening",
  );

  return {
    eveningAppointments,
    afternoonAppointments,
    morningAppointments,
    agendaDate,
    setAgendaDate,
  };
};

export default useAgenda;
