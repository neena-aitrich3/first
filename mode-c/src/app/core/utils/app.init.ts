import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
      keycloak.init({
        config: {
          // url: 'http://192.168.1.87:8080',
          // realm: 'realms',
          // clientId: 'mod-c-admin'
          url: 'http://localhost:8080/',
        realm: 'hexadefence',
        clientId: 'angular-client',
        },
        initOptions: {
          onLoad:'login-required',
          checkLoginIframe : true,
          flow:'standard'
        }
       
      });
  }