// environment.prod.ts
declare const API_URL: string;

export const environment = {
  production: true,
  apiUrl: API_URL
};

/* // frontend/src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: '' // This will be replaced at build time
}; */