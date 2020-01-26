import { Injectable } from '@angular/core';
import { Robot, RobotLineup, RobotTeam } from '../state/robots.model';
import * as _ from 'lodash';
import { teamCriteria } from 'src/app/constants/competition';
import {
  TeamResult,
  DanceOffResult,
  DanceOffResults
} from '../state/dance-offs.model';
import { DanceOffService } from '../state/dance-offs.service';

@Injectable()
export class CompetitionService {
  private static maxFormationAttempts = 100;

  constructor(private danceOffService: DanceOffService) {}

  /**
   * Create two teams from all available robots.
   * Criteria:
   * - 5 robots on each team
   * - overall experience must be <= 50
   */
  public createOpposingTeams(robots: Robot[]): [RobotLineup, RobotLineup] {
    let firstTeam: RobotLineup;
    let secondTeam: RobotLineup;

    // for the highly unlikely case of the first team being so "weak" that
    // the second team cannot be formed, retry up to 100 times
    let i = 0;
    do {
      i++;
      firstTeam = this.createRobotTeam(robots);
      if (_.isNull(firstTeam)) {
        continue;
      }
      secondTeam = this.createRobotTeam(_.difference(robots, firstTeam));
    } while (
      (_.isNull(firstTeam) || _.isNull(secondTeam)) &&
      i < CompetitionService.maxFormationAttempts
    );

    if (_.isNull(firstTeam) || _.isNull(secondTeam)) {
      return null;
    }

    console.log(`Teams formed after ${i} attempt(s).`);

    return [firstTeam, secondTeam];
  }

  /**
   * Get the full outcome of a danceoff between two teams
   */
  public calculateTeamDanceOff(
    firstTeam: RobotTeam,
    secondTeam: RobotTeam
  ): DanceOffResults {
    const results = {
      danceoffs: this.createWeightedRandomOutcome(firstTeam, secondTeam).map(
        (result, index) => {
          const firstRobotId = firstTeam.robots[index].id;
          const secondRobotId = secondTeam.robots[index].id;
          return {
            winner: result ? firstRobotId : secondRobotId,
            opponents: [firstRobotId, secondRobotId] as [number, number] // satisfy the length constraint
          };
        }
      )
    };

    this.danceOffService.postResults(results);

    return results;
  }

  /**
   * It may look like a fierce competition, but it's all scripted in the background ;-)
   * Lets two robot lineups battle against each other, with winning probalities weighted by experience
   */
  private createWeightedRandomOutcome(
    firstTeam: RobotTeam,
    secondTeam: RobotTeam
  ): TeamResult {
    return firstTeam.robots.map((robot, index) => {
      return this.robotDance(robot, secondTeam.robots[index]);
    }) as TeamResult;
  }

  /**
   * Randomize a single danceoff outcome weighted by experience
   */
  private robotDance(firstRobot: Robot, secondRobot: Robot): boolean {
    const result = _.random(1, firstRobot.experience + secondRobot.experience);
    return result <= firstRobot.experience;
  }

  /**
   *
   * @param robots Robot list
   */
  private createRobotTeam(robots: Robot[]): RobotLineup {
    let experienceLeft = teamCriteria.maxExperience;

    const lineup = [null, null, null, null, null] as RobotLineup;

    for (let i = 0; i < teamCriteria.size; i++) {
      const possibleRobots = robots.filter(
        robot => robot.experience <= experienceLeft && !lineup.includes(robot)
      );
      if (_.isEmpty(possibleRobots)) {
        return null;
      }
      lineup[i] = _.sample(possibleRobots);
      experienceLeft -= lineup[i].experience;
    }

    return lineup;
  }
}
