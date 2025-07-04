export interface FieldOption {
  label: string;
  value: string | number | boolean;
}

export interface Field {
  name: string;
  label: string;
  type: "input" | "select" | "checkbox" | "textarea";
  options?: FieldOption[];
  attrs?: Record<string, unknown>;
}

export type FormData = Record<string, unknown>;
