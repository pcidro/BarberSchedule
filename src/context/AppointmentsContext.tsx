"use client";

import React, { useState, type PropsWithChildren } from "react";
import type { Appointment } from "@/types/appointment";

interface iAppointmentContext {
  removeAppointment: (appointment: string) => void;
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
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
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  async function removeAppointment(id: string) {
    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setAppointments((prev) =>
        prev.filter((appointment) => appointment.id !== id),
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        setAppointments,
        removeAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export default Appointments;
