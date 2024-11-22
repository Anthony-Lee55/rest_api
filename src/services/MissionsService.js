import { dbContext } from "../db/DbContext";


class MissionsService {
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('rat location', '-name -picture')
    return missions
  }

  async createMission(missionData) {
    const mission = (await dbContext.Missions.create(missionData)).populate('rat location', '-name -picture')
    return mission
  }
}

export const missionsService = new MissionsService()