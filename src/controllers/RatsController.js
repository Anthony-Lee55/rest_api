import BaseController from "../utils/BaseController";
import { ratsService } from "../services/RatsService";

export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router.get('', this.getRats)
      .get('/:ratId/missions', this.getRatById)
  }

  async getRats(request, response, next) {
    try {
      const rats = await ratsService.getRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }

  async getRatById(request, response, next) {
    try {
      const ratId = request.params.ratId
      const rat = await ratsService.getRatById(ratId)
      response.send(rat)
    } catch (error) {
      next(error)
    }
  }
}