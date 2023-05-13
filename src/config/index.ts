export const config = {
  STATE_KEY: '_state_v1',
  MINUTES_INACTIVE: import.meta.env.VITE_MINUTES_INACTIVE || 15,
  ROUTES: {},
  API: {
    URL_BASE: import.meta.env.VITE_API_URL || '',
  },
};

export enum Role {
  AUTHENTICATED = 1,
  PUBLIC = 2,
  INVESTOR = 3,
  ADMIN_CROWFI = 4,
}

export enum UserRegistedState {
  EMAIL_NO_VERIFICADO = 1,
  EMAIL_VERIFICADO_PERFIL_NO_COMPLETO = 2,
  EMAIL_VERIFICADO_PERFIL_APROBADO = 3,
  EMAIL_VERIFICADO_PERFIL_ENVIADO = 4,
  SUSPENDIDO = 5,
}

export enum KeyQuery {
  GET_PROYECT = 'GET_PROYECT',
  GET_USER_FILTER = 'GET_USER_FILTER',
  GET_CATEGORYS = 'GET_CATEGORYS',
}
