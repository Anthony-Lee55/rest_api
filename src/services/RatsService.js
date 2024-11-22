import { dbContext } from "../db/DbContext"


class RatsService {
  async getRats() {
    const rats = await dbContext.Rats.find()
    return rats
  }

  async getRatById(ratId) {
    const rat = await dbContext.Rats.findById(ratId)
    if (rat == null) {
      throw new Error(`Invalid id: ${ratId}`);
    }
    return rat
  }
}

export const ratsService = new RatsService()