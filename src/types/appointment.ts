export type Period = "morning" | "afternoon" | "evening";

export type CreateAppointment = {
  clientName: string;
  date: string;
  time: string;
  period: Period;
};

export type Appointment = {
  id: string;
  clientName: string;
  date: string;
  time: string;
  createdAt: string;
};
