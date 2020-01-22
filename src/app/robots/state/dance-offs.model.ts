/**
 * DanceOff model as specified by the [documentation](https://challenge.parkside-interactive.com/docs/)
 */
export interface DanceOff {
  id: number;
  winner: number;
  loser: number;
  dancedAt: string;
}

export interface DanceOffResult {
  winner: number;
  opponents: [number, number];
}

export interface DanceOffResults {
  danceoffs: DanceOffResult[];
}

export type TeamResult = [boolean, boolean, boolean, boolean, boolean];
