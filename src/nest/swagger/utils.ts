import { CommonIntersectionType } from '../mapped-types/intersection-type.helper';
import { CommonOmitType } from '../mapped-types/omit-type.helper';
import { CommonPartialType } from '../mapped-types/partial-type.helper';
import { CommonPickType } from '../mapped-types/pick-type.helper';
import { ApiPropertyOptions } from './api-property.interface';
import { swaggerComponent } from './swagger-component';

type ApiPropertyDecorator = (options?: ApiPropertyOptions) => PropertyDecorator;

export const ApiProperty = swaggerComponent<ApiPropertyDecorator>(
  'ApiProperty',
  () => () => {},
);

export const PartialType = swaggerComponent('PartialType', CommonPartialType);
export const PickType = swaggerComponent('PickType', CommonPickType);
export const OmitType = swaggerComponent('OmitType', CommonOmitType);
export const IntersectionType = swaggerComponent(
  'IntersectionType',
  CommonIntersectionType,
);
