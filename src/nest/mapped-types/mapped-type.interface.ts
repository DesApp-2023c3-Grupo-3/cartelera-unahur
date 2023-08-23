import { Type } from '../common/type.interface';

export interface MappedType<T> extends Type<T> {
  new (): T;
}
