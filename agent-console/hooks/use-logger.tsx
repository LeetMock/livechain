import { createEventRegistry } from "@/lib/event-registry";
import { EventType } from "@/lib/event-types";

export const { useLogger, renderEventLog, getEventColor } = createEventRegistry({
  [EventType.System_ParticipantConnected]: {
    color: "bg-blue-100 text-blue-800",
    render: ({ id, name }: { id: string; name?: string }) => renderJson({ id, name }),
  },
  [EventType.System_ParticipantDisconnected]: {
    color: "bg-red-100 text-red-800",
    render: ({ id }: { id: string }) => renderJson({ id }),
  },
});

export const renderJson = (data: unknown) => (
  <pre className="text-xs bg-gray-50 p-2 rounded-md overflow-x-auto">
    {typeof data === "object"
      ? JSON.stringify(data, null, 2)
      : JSON.stringify({ value: data }, null, 2)}
  </pre>
);
