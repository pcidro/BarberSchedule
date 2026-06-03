"use client";
import { useState } from "react";
import type { Appointment, Period } from "@/types/appointment";
import { TIME_SLOTS } from "../utils/TimeSlots";

const useScheduling = () => {
  const [clientName, setClientName] = useState("");
  const [hourSelected, setHourSelected] = useState<string | null>(null);
  const [dateSelected, setDateSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const isValid =
    clientName.trim().length > 0 &&
    hourSelected !== null &&
    dateSelected !== null;

  function reset() {
    setClientName("");
    setHourSelected(null);
    setDateSelected(null);
    setSubmitted(false);
  }

  function buildAppointment() {
    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      clientName,
      time: hourSelected!,
      date: dateSelected!,
      period: getPeriod(hourSelected!),
    };
    return newAppointment;
  }

  return {
    buildAppointment,
    clientName,
    setClientName,
    hourSelected,
    setHourSelected,
    dateSelected,
    setDateSelected,
    isValid,
    reset,
    submitted,
    setSubmitted,
  };
};

export default useScheduling;
