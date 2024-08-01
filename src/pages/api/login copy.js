import axios from 'axios';
import qs from 'qs';
export const runtime = 'edge';
export default async function handler(req, res) {
  const { idTask, param1, param2, param3, userDomain } = req.body;
  let apiUrl = '';

  if (userDomain === 'webkfc.neotelecd.com') {
    apiUrl = 'http://webkfc.neotelecd.com/neoapi/webservice.asmx/ExecuteTask03';
  } else {
    apiUrl = 'TBD'; // Falta listar el resto de los dominios.
  }

  try {
    console.log('Iniciando la solicitud...');
    axios.defaults.timeout = 10000; // 10 segundos

    const response = await axios.post(
      apiUrl,
      qs.stringify({
        idTask,
        param1,
        param2,
        param3
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    console.log('Solicitud realizada con éxito:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error durante la solicitud:', error.message);
    res.status(500).json({ success: false, message: 'Error al conectar con el servidor' });
  }
}
