import { DeepPartial, EntityManager, getManager, getRepository, Repository } from "typeorm";
import EntityNotFoundException from "../exception/EntityNotFoundException";
import { ErrorCodes } from "../util/errorCode";
import SearchResult from "../util/rest/searchresult";
import { GardenSiteDto } from "../dto/GardenSiteDto"; // Import the appropriate DTO for GardenSite
import { GardenSite } from "../entity/GardenSite"; // Import the GardenSite entity
import { isNonEmptyArray } from "../util/commonUtil";
import PaginationSupportedResponse from "../util/rest/paginationSupportedResponse";
import { Product } from "../entity/Product";
import { Plant } from "../entity/Plant";

/**
 * Handles CRUD operations for Plant entities
 */
export class PlantDao {

    public getAllPlants = async (searchParams: any): Promise<PaginationSupportedResponse> => {
        searchParams.limit = searchParams?.limit || 1000;
        searchParams.offset = searchParams?.offset || 0;
    
        let query = getManager().createQueryBuilder(Plant, "plant")
        .leftJoinAndSelect("garden_site_plant", "gardenSitePlant",
        '"gardenSitePlant"."plant_id"= plant.id')
        .leftJoinAndMapOne("plant.gardenSite", GardenSite, "gardenSite", "gardenSite.id = gardenSitePlant.garden_site_id")
        if(searchParams.gardenSiteId){
            query.where("gardenSite.id = :gardenSiteId", {gardenSiteId: searchParams.gardenSiteId})
        }
        if(searchParams.userId){
            query.where("gardenSite.user_id = :userId", {userId: searchParams.userId})
        }
        const [records, total] = await query
          .skip(searchParams.offset)
          .take(searchParams.limit)
          .getManyAndCount();
    
        return { data: isNonEmptyArray(records) ? records : [], total };
      }

//   public create = async (
//     gardenSiteData: GardenSiteDto
//   ): Promise<GardenSite> => {
//     const gardenSiteRepo: Repository<GardenSite> = getRepository(GardenSite);
//     const newGardenSite: GardenSite = await gardenSiteRepo.save(gardenSiteData);
//     return newGardenSite;
//   }

//   public getGardenSiteById = async (gardenSiteId: string): Promise<GardenSite> => {
//     const gardenSiteRepo: Repository<GardenSite> = getManager().getRepository(GardenSite);

//     let query = getManager().createQueryBuilder(GardenSite, "gardenSite")
//     .leftJoinAndMapOne("gardenSite.product", Product, "product", "product.id = gardenSite.product_id")
//     // .leftJoinAndSelect("perk_user", "perkUserStatus",
//     // '"perkUserStatus"."status"=:status and "perkUserStatus"."perk_id" = perk.id',
//     //         {status: PerkUserStatus.INTERESTED})
//     .leftJoinAndSelect("garden_site_plant", "gardenSitePlant",
//     '"gardenSitePlant"."garden_site_id"= gardenSite.id')
//     .leftJoinAndMapMany("gardenSite.plants", Plant, "plant", "plant.id = gardenSitePlant.plant_id")
//     query.where("gardenSite.id = :gardenSiteId", {gardenSiteId})
//     const gardenSiteData = await query
//       .getOne();
//     return gardenSiteData;
//   }

//   public updateGardenSite = async (
//     gardenSiteId: string,
//     gardenSiteData: Partial<GardenSiteDto>
//   ): Promise<GardenSite | undefined> => {
//     const gardenSiteRepo: Repository<GardenSite> = getRepository(GardenSite);
//     await gardenSiteRepo.update(gardenSiteId, gardenSiteData);
//     return this.getGardenSiteById(gardenSiteId);
//   }

//   public deleteGardenSite = async (gardenSiteId: string): Promise<GardenSite | undefined> => {
//     const gardenSiteRepo: Repository<GardenSite> = getRepository(GardenSite);
//     const deletedGardenSite = await gardenSiteRepo.delete(gardenSiteId);
//     return deletedGardenSite.raw;
//   }


}
