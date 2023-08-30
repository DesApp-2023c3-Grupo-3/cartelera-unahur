import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { CourseScreenDto } from "./course-screen.dto";
import {  ResponseCourseDto } from "../course";
import { ResponseScreenDto } from "../screen";

export class ResponseCourseScreenDto extends OmitType(CourseScreenDto, ['course','screen'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    course: ResponseCourseDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    screen: ResponseScreenDto;
  
}