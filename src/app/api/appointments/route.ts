import { prisma } from "@/app/lib/prisma";
import { getEndDay, getStartDay } from "@/app/utils/GetStartAndFinishDay";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const date = searchParams.get("date");
  if (!date) {
    return Response.json({ error: "Informe uma data" }, { status: 400 });
  }
  const selectedDate = new Date(date);
  if (isNaN(selectedDate.getTime())) {
    return Response.json({ error: "Data inválida" }, { status: 400 });
  }
  const startDay = getStartDay(selectedDate);
  const endDay = getEndDay(selectedDate);
  const appointments = await prisma.appointment.findMany({
    where: {
      date: {
        gte: startDay,
        lte: endDay,
      },
    },
  });
  return Response.json(appointments);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientName, date, time } = body;
    if (!clientName || !date || !time) {
      return Response.json({ error: "Dados obrigatórios" }, { status: 400 });
    }

    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        date: new Date(date),
        time,
      },
    });

    if (existingAppointment) {
      return Response.json({ error: "Horário já agendado" }, { status: 409 });
    }

    const appointment = await prisma.appointment.create({
      data: {
        clientName,
        date: new Date(date),
        time,
      },
    });
    return Response.json(
      {
        message: "Agendamento criado com sucesso!",
        data: { clientName, date, time },
        appointment: appointment,
      },
      { status: 201 },
    );
  } catch {
    return Response.json({ error: "Agendamento invalido" }, { status: 400 });
  }
}
