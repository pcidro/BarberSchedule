export type Period = "morning" | "afternoon" | "evening";

export interface Appointment {
  date: string;
  time: string;
  clientName: string;
  period: Period;
}
