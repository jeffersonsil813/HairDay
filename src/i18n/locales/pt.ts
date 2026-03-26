import type { TranslationSchema } from "./en";

export const pt: TranslationSchema = {
  form: {
    title: "Agende um atendimento",
    subtitle:
      "Selecione data, horário e informe o nome do cliente para criar o agendamento",
    labels: {
      date: "Data",
      hours: "Horários",
      client: "Cliente",
    },
    placeholders: {
      client: "Nome do cliente",
    },
    submit_button: "AGENDAR",
  },
  schedule: {
    title: "Sua agenda",
    subtitle: "Consulte os seus cortes de cabelo agendados por dia",
    empty_state: "Nenhum agendamento para este período",
    periods: {
      morning: "Manhã",
      afternoon: "Tarde",
      night: "Noite",
    },
  },
};
