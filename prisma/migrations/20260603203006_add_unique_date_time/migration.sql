/*
  Warnings:

  - A unique constraint covering the columns `[date,time]` on the table `appointment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "appointment_date_time_key" ON "appointment"("date", "time");
