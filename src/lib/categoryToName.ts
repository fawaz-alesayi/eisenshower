import type { TodoCategory } from "./stores/todoStore";

export const categoryNames: Record<TodoCategory, string> = {
    ImportantUrgent: "Important & Urgent",
    ImportantNotUrgent: "Important & Not Urgent",
    NotImportantUrgent: "Not Important & Urgent",
    NotImportantNotUrgent: "Not Important & Not Urgent"
} as const;