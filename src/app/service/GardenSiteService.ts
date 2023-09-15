import { GardenSiteDto } from "../dto/GardenSiteDto"; // Import the appropriate DTO for GardenSite
import { GardenSite } from "../entity/GardenSite"; // Import the GardenSite entity
import EntityNotFoundException from "../exception/EntityNotFoundException";
import { GardenSiteDao } from "../repository/GardenSiteDao"; // Import the GardenSiteDao or equivalent
import { ErrorCodes } from "../util/errorCode";
import SearchResult from "../util/rest/searchresult";

export class GardenSiteService {
  constructor(
    private gardenSiteDao: GardenSiteDao, // Use the appropriate repository or DAO
  ) {}

  public createGardenSite = async (
    gardenSiteData: GardenSiteDto
  ): Promise<GardenSite> => {
    // Customize this method to create a GardenSite entity
    const newGardenSite: GardenSite = await this.gardenSiteDao.create(gardenSiteData);
    return newGardenSite;
  }

  public getAllGardenSites = async (params: any): Promise<SearchResult> => {
    const { data, total } = await this.gardenSiteDao.getAllGardenSites(params);
    return {
      data: data,
      length: data.length,
      total,
    };
  }

  public getGardenSiteById = async (gardenSiteId: string): Promise<GardenSite> => {
    const gardenSite = await this.gardenSiteDao.getGardenSiteById(gardenSiteId);
    // if (!gardenSite) {
    //   const error = ErrorCodes.GARDEN_SITE_NOT_FOUND; // Define the appropriate error code
    //   throw new EntityNotFoundException(error);
    // }
    return gardenSite;
  }

  public updateGardenSite = async (
    gardenSiteId: string,
    gardenSiteData: Partial<GardenSiteDto>
  ): Promise<GardenSite | undefined> => {
    const updatedGardenSite = await this.gardenSiteDao.updateGardenSite(gardenSiteId, gardenSiteData);
    return updatedGardenSite;
  }

  public deleteGardenSite = async (gardenSiteId: string): Promise<GardenSite | undefined> => {
    const deletedGardenSite = await this.gardenSiteDao.deleteGardenSite(gardenSiteId);
    return deletedGardenSite;
  }
}
