import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { CourseScreenDto } from "./course-screen.dto";
import { CourseDto } from "../course";
import { ScreenDto } from "../screen";

export class ResponseCourseScreenDto extends OmitType(CourseScreenDto, ['course','screen'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    course: CourseDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    screen: ScreenDto;
  
}