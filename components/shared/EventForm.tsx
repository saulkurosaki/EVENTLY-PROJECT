"use client";

interface Event {
  userId: string;
  type: "Create" | "Update";
}

const EventForm = ({ userId, type }: Event) => {
  return <div>Event form {type}</div>;
};

export default EventForm;
