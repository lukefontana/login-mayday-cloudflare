// pages/api/login.js
import axios from 'axios';

export const runtime = 'experimental-edge';

export default async function handler(req, res) {
  console.log('in 1');
  const { idTask, param1, param2, param3, userDomain } = req.body;
  console.log('in 1');
  let apiUrl = '';

  if (userDomain === 'webkfc.neotelecd.com') {
    apiUrl = 'http://webkfc.neotelecd.com/neoapi/webservice.asmx/ExecuteTask03';
  } else {
    apiUrl = 'TBD'; //Falta listar el resto de los dominios.
  }
  try {
  console.log('in ');
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
    console.log('response');
    console.log(response);
    //res.status(200).json(response.data);
  } catch (error) {
    //Trabajar en mejorar los mensajes de error por otros mas significativos.
    //res.status(500).json({ success: false, message: 'Error al conectar con el servidor' });
  }
}
