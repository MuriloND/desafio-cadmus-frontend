/**
 * Lê um cookie específico diretamente do navegador.
 * Substitui bibliotecas pesadas como 'js-cookie' ou 'nookies' para leitura no cliente.
 * * @param name Nome do cookie (ex: 'cadmus.token')
 */
export const getClientCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
  
  return undefined;
};