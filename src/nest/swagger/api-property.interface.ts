import { Type } from '../common/type.interface';

export interface DiscriminatorObject {
  propertyName: string;
  mapping?: Record<string, string>;
}

export interface XmlObject {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}

export interface ExternalDocumentationObject {
  description?: string;
  url: string;
}

export interface ReferenceObject {
  $ref: string;
}

export interface SchemaObject {
  nullable?: boolean;
  discriminator?: DiscriminatorObject;
  readOnly?: boolean;
  writeOnly?: boolean;
  xml?: XmlObject;
  externalDocs?: ExternalDocumentationObject;
  example?: any;
  examples?: any[] | Record<string, any>;
  deprecated?: boolean;
  type?: string;
  allOf?: (SchemaObject | ReferenceObject)[];
  oneOf?: (SchemaObject | ReferenceObject)[];
  anyOf?: (SchemaObject | ReferenceObject)[];
  not?: SchemaObject | ReferenceObject;
  items?: SchemaObject | ReferenceObject;
  properties?: Record<string, SchemaObject | ReferenceObject>;
  additionalProperties?: SchemaObject | ReferenceObject | boolean;
  patternProperties?: SchemaObject | ReferenceObject | any;
  description?: string;
  format?: string;
  default?: any;
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
}

export interface SchemaObjectMetadata
  extends Omit<SchemaObject, 'type' | 'required'> {
  type?: Type<unknown> | Function | [Function] | string | Record<string, any>;
  isArray?: boolean;
  required?: boolean;
  name?: string;
  enumName?: string;
}

export interface ApiPropertyOptions
  extends Omit<SchemaObjectMetadata, 'name' | 'enum'> {
  name?: string;
  enum?: any[] | Record<string, any>;
  enumName?: string;
}
