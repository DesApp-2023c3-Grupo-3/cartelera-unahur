let swaggerLibrary: any;

try {
  swaggerLibrary = require('@nestjs/swagger');
} catch (error) {
  // La biblioteca @nestjs/swagger no está presente.
}

/**
 * Devuelve el componente con el nombre especificado, si es que la biblioteca `@nestjs/swagger` está presente.
 * En caso contrario, devuelve el segundo parámetro.
 */
export function swaggerComponent<T>(name: string, fallback: T): T {
  return swaggerLibrary?.[name] ?? fallback;
}
