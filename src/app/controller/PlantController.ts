import { NextFunction, Response } from "express";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
import APP_CONSTANTS from "../constants";
import { PlantService } from "../service/PlantService";

class PlantController extends AbstractController {
  private plantService: PlantService;

  constructor(plantService: PlantService) {
    super(`${APP_CONSTANTS.apiPrefix}/plants`);
    this.plantService = plantService;
    this.initializeRoutes();
  }

  protected initializeRoutes = (): void => {
    this.router.get(
      `${this.path}`,
      this.asyncRouteHandler(this.getAllPlants)
    );
    // this.router.get(
    //   `${this.path}/:id`,
    //   this.asyncRouteHandler(this.getGardenSiteById)
    // );
    // this.router.post(
    //   `${this.path}`,
    //   this.asyncRouteHandler(this.createGardenSite)
    // );
    // this.router.put(
    //   `${this.path}/:id`,
    //   this.asyncRouteHandler(this.updateGardenSite)
    // );
    // this.router.delete(
    //   `${this.path}/:id`,
    //   this.asyncRouteHandler(this.deleteGardenSite)
    // );
  }

  private getAllPlants = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const getPlantsParams: any = request.query;
    const { data, total } = await this.plantService.getAllPlants(getPlantsParams);
    response.send(this.fmt.formatResponse(data, Date.now() - request.startTime, "OK", total));
  }

//   private getGardenSiteById = async (
//     request: RequestWithUser,
//     response: Response,
//     next: NextFunction
//   ) => {
//     const gardenSiteId = request.params.id;
//     const gardenSite = await this.gardenSiteService.getGardenSiteById(gardenSiteId);
//     if (gardenSite) {
//       response.send(this.fmt.formatResponse(gardenSite, Date.now() - request.startTime, "OK"));
//     } else {
//       response.status(404).send(this.fmt.formatResponse("GardenSite not found", 404));
//     }
//   }

//   private createGardenSite = async (
//     request: RequestWithUser,
//     response: Response,
//     next: NextFunction
//   ) => {
//     const gardenSiteData = request.body;
//     const newGardenSite = await this.gardenSiteService.createGardenSite(gardenSiteData);
//     response.status(201).send(this.fmt.formatResponse(newGardenSite, Date.now() - request.startTime, "Created"));
//   }

//   private updateGardenSite = async (
//     request: RequestWithUser,
//     response: Response,
//     next: NextFunction
//   ) => {
//     const gardenSiteId = request.params.id;
//     const gardenSiteData = request.body;
//     const updatedGardenSite = await this.gardenSiteService.updateGardenSite(gardenSiteId, gardenSiteData);
//     if (updatedGardenSite) {
//       response.send(this.fmt.formatResponse(updatedGardenSite, Date.now() - request.startTime, "OK"));
//     } else {
//       response.status(404).send(this.fmt.formatResponse("GardenSite not found", 404));
//     }
//   }

//   private deleteGardenSite = async (
//     request: RequestWithUser,
//     response: Response,
//     next: NextFunction
//   ) => {
//     const gardenSiteId = request.params.id;
//     const deletedGardenSite = await this.gardenSiteService.deleteGardenSite(gardenSiteId);
//     if (deletedGardenSite) {
//       response.send(this.fmt.formatResponse(deletedGardenSite, Date.now() - request.startTime, "OK"));
//     } else {
//       response.status(404).send(this.fmt.formatResponse("GardenSite not found", 404));
//     }
//   }
}

export default PlantController;
