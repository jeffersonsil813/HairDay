export const en = {
  form: {
    title: "Schedule an appointment",
    subtitle:
      "Select date, time and enter the client's name to create the appointment",
    labels: {
      date: "Date",
      hours: "Hours",
      client: "Client",
    },
    placeholders: {
      client: "Client name",
    },
    submit_button: "SCHEDULE",
  },
  schedule: {
    title: "Your schedule",
    subtitle: "Check your scheduled haircuts per day",
    empty_state: "No appointments for this period",
    periods: {
      morning: "Morning",
      afternoon: "Afternoon",
      night: "Night",
    },
  },
};

export type TranslationSchema = typeof en;
