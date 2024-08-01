import axios from 'axios';

export default async function handler(req, res) {
  console.log('Recibiendo solicitud en /api/login');
  console.log('Cuerpo de la solicitud:', req.body);
  try {
    const response = await axios.post('http://webkfc.neotelecd.com/neoapi/webservice.asmx', req.body);
    console.log('Respuesta del servidor externo:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error en el POST a la API externa:', error);
    res.status(500).json({ success: false, message: 'Error al conectar con el servidor' });
  }
}
