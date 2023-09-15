import { IsString, IsBoolean, IsOptional, IsUUID, IsInt, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class PostDto {
  @IsOptional()
  @IsUUID()
  public id?: string;

  @IsString()
  public content?: string;

  @IsOptional()
  @IsArray()
  public images?: any[] | null;

  @IsBoolean()
  public isPost?: boolean;

  @IsOptional()
  @IsUUID()
  public parentId?: string;

  @IsOptional()
  @IsInt()
  public likeCount?: number | null;

  @IsOptional()
  @IsUUID()
  public userId: string

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true }) // Validate each comment in the array
  @Type(() => PostDto) // Ensure nested objects are of type PostDto
  public comments?: PostDto[]; // Array of comments or nested posts
}
