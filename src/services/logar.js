import axios from 'axios';

export default async function logar(email, senha) {
  //force commit
  try {
    const { status, data } = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL || 'http://localhost:4020/'}logar`,
      data: {
        email,
        senha,
      },
    });

    return { status, data };
  } catch (err) {
    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}
