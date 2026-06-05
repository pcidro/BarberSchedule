import { prisma } from "@/app/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const deleteAppointment = await prisma.appointment.delete({
      where: {
        id,
      },
    });

    return Response.json({
      message: "Agendamento deletado com sucesso!",
      data: deleteAppointment,
    });
  } catch (error) {
    console.log("Erro ao deletar:", error);

    return Response.json(
      { error: "Não foi possível deletar o agendamento" },
      { status: 400 },
    );
  }
}
