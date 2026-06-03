"use client";

import React, { useState, type PropsWithChildren } from "react";
import type { Appointment } from "@/types/appointment";

interface iAppointmentContext {
  bookAppointment: (appointment: Appointment) => void;
  removeAppointment: (appointment: string) => void;
  appointments: Appointment[];
}

const AppointmentsContext = React.createContext<iAppointmentContext | null>(
  null,
);

export const Appointments = () => {
  const context = React.useContext(AppointmentsContext);
  if (!context) throw new Error("useAuth deve estar dentro do AuthProvider");
  return context;
};

export const AppointmentsProvider = ({ children }: PropsWithChildren) => {
  const [appointments, setAppointment] = useState<Appointment[]>([]);

  function removeAppointment(appointmentRemove: string) {
    const remove = appointments.filter(
      (appointment) => appointment.clientName !== appointmentRemove,
    );
    setAppointment(remove);
  }

  function bookAppointment(newAppointment: Appointment) {
    setAppointment((prev) => [...prev, newAppointment]);
  }

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        bookAppointment,
        removeAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export default Appointments;
