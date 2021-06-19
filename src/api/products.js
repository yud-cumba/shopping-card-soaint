const protocol = 'https://';
const host = 'fakestoreapi.com';
const endpointProducts = 'products';

export async function getProducts() {
  /**
   * Los parámetros que hemos obtenido a través de la URL
   *  @returns {Object}
   */
  const API_URL = `${protocol}${host}/${endpointProducts}`;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    },
  };
  const resp = await fetch(API_URL, requestOptions);
  const data = await resp.json();
  switch (resp.status) {
    case 200:
      return data;
    case 400:
      throw new Error('Error 400 - La URL solicitada no se encontró en este servidor');
    case 401:
      throw new Error('Error 401 -  El token de autorización no es válido para obtener sus datos');
    case 404:
      throw new Error('Error 404 - Página no encontrada');
    case 500:
      throw new Error('Error 500 - Error de servidor interno');
    default:
      throw new Error(resp.statusText);
  }
}

export async function getProductsDetail(id) {
    /**
     * Los parámetros que hemos obtenido a través de la URL
     *  @returns {Object}
     */
    const API_URL = `${protocol}${host}/${endpointProducts}/${id}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      },
    };
    const resp = await fetch(API_URL, requestOptions);
    const data = await resp.json();
    switch (resp.status) {
      case 200:
        return data;
      case 400:
        throw new Error('Error 400 - La URL solicitada no se encontró en este servidor');
      case 401:
        throw new Error('Error 401 -  El token de autorización no es válido para obtener sus datos');
      case 404:
        throw new Error('Error 404 - Página no encontrada');
      case 500:
        throw new Error('Error 500 - Error de servidor interno');
      default:
        throw new Error(resp.statusText);
    }
  }