import {
  DeepPartial,
  DeleteResult,
  EntityManager,
  getManager,
  getRepository,
  Repository,
} from "typeorm";
import EntityNotFoundException from "../exception/EntityNotFoundException";
import { ErrorCodes } from "../util/errorCode";
import SearchResult from "../util/rest/searchresult";
import { EmployeeDto } from "../dto/EmployeeDto";
import { RegisterUserDto } from "../dto/RegisterUserDto";
import { User } from "../entity/User";
import { isNonEmptyArray } from "../util/commonUtil";
import PaginationSupportedResponse from "../util/rest/paginationSupportedResponse";
import { getConnection, QueryRunner } from 'typeorm';

/**
 * Handles CRUD operations
 */
export class UserDao {

  public register = async (
    userRegistrationData: RegisterUserDto
  ): Promise<User> => {
    const userRepo: Repository<User> = getRepository(User);
    const userDetail: User = await userRepo.save(userRegistrationData);
    return userDetail;
  }

  public getById = async (userId: string): Promise<User> => {
    const userRepo: Repository<User> = getManager().getRepository(User);
    const userData = await userRepo.findOne(userId);
    return userData;
  }

  public getByPhoneNumber = async (phoneNumber: string): Promise<User> => {
    const userRepo: Repository<User> = getManager().getRepository(User);
    const userData = await userRepo.findOne({ phoneNumber });
    return userData;
  }

  public updateUserStatus = async (userId: string): Promise<boolean> => {
    const userRepo: Repository<User> = getRepository(User);
    await userRepo.update(userId, {
      status: "verified"
    });
    return true;
  }

  public getUserGardenCounts = async (userId: string): Promise<{ gardenCount: number; plantCount: number }> => {
    const query = `
      SELECT
        COUNT(DISTINCT gs.id) AS "gardenCount",
        COUNT(DISTINCT p.id) AS "plantCount"
      FROM
        garden_site gs
      LEFT JOIN
        garden_site_plant p ON gs.id = p.garden_site_id
      WHERE
        gs.user_id = $1
    `;
    const connection = getConnection(); // Get the existing connection or create one
    const queryRunner: QueryRunner = connection.createQueryRunner();
    const result = await queryRunner.query(query, [userId]);
    if (result.length > 0) {
      const { gardenCount, plantCount } = result[0];
      console.log({ gardenCount, plantCount })
      return { gardenCount, plantCount };
    } else {
      return { gardenCount: 0, plantCount: 0 };
    }
  }

  public getAllUsers = async (searchParams: any): Promise<PaginationSupportedResponse> => {
    searchParams.limit = searchParams?.limit || 1000;
    searchParams.offset = searchParams?.offset || 0;
    // const {query, parameters} = getAllRides(searchParams);
    // const resp = await getManager().query(query, parameters);
    // const userRepo: Repository<User> = getRepository(User);
    // const resp = userRepo.find();
    // let query = 1;
    let query = getManager().createQueryBuilder(User,"user");
    const [records, total]  = await query.skip(searchParams.offset)
    .take(searchParams.limit)
    .getManyAndCount();


    // const [records, total] = await queryBuilder
    // .take(params.limit)
    // .skip(params.offset)
    // .orderBy("playlistVideoMap.order", "ASC")
    // .getManyAndCount();
    // return Array.isArray(records) && records.length > 0 ? records : [];
    return {data : isNonEmptyArray(records) ? records : [], total }
  }
//   public getById = async (vehicleId: string): Promise<Vehicle> => {
//     const vehicleRepo: Repository<Vehicle> = getManager().getRepository(Vehicle);
//     const vehicleData = await vehicleRepo.findOne(vehicleId);
//     return vehicleData;
//  }

}
