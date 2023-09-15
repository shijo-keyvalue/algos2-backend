import {
    IsString,
    IsDefined,
    IsOptional,
    IsNumber,
    IsDateString,
} from "class-validator";

/**
 * Data transfer object (DTO) with expected fields for creating users
 */
export class GardenSiteDto {

    @IsDefined()
    @IsString()
    public name: string;
    
}
