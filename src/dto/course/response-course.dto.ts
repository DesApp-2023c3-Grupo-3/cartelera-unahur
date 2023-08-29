import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { CourseDto } from "./course.dto";
import { ClassroomDto } from "../classroom";
import { SubjectDto } from "../subject";
import { ScheduleDto } from "../schedule";
import { SectorDto } from "../sector";
import { UserDto } from "../user";

export class ResponseCourseDto extends OmitType(CourseDto, ['classroom','user','sector','schedule','subject'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    classroom: ClassroomDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    user: UserDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    sector: SectorDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    schedule: ScheduleDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    subject: SubjectDto;
  
}