export interface Condition {
  text: string;
  icon: string;
}

export interface Weather {
  condition: Condition;
  temperature: number;
  wind: number;
  humidity: number;
}
