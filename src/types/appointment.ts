export type Period = "morning" | "afternoon" | "evening";

export interface Appointment {
  id: string;
  date: string;
  time: string;
  clientName: string;
  period: Period;
}
