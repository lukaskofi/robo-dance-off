export type RobotLineup = [Robot, Robot, Robot, Robot, Robot];

export interface RobotTeam {
  name: string;
  robots: RobotLineup;
}

/**
 * Robot model as specified by the [documentation](https://challenge.parkside-interactive.com/docs/)
 */
export interface Robot {
  id: number;
  name: string;
  experience: number;
  outOfOrder: boolean;
  avatar: string;
}
