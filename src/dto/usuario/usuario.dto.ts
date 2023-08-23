export interface KeycloakUser {
  email: string;
  family_name: string;
  given_name: string;
  name: string;
  preferred_username: string;
}

export class UsuarioDto {
  constructor(keycloakUser: KeycloakUser) {
    this.nombreCompleto = keycloakUser.name;
    this.nombre = keycloakUser.given_name;
    this.apellido = keycloakUser.family_name;
    this.email = keycloakUser.email;
    this.usuario = keycloakUser.preferred_username;
  }

  nombreCompleto: string;
  nombre: string;
  apellido: string;
  email: string;
  usuario: string;
}
