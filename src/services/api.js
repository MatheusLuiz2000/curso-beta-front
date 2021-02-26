import axios from 'axios';

const dadosAdm = JSON.parse(localStorage.getItem('adm'));

export async function buscarCategorias() {
  try {
    const { status, data } = await axios({
      method: 'get',
      url: `http://localhost:4020/categorias`,
      headers: {
        Authorization: `Bearer ${dadosAdm.token}`,
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

export async function buscarCursos(filtros) {
  try {
    const { status, data } = await axios({
      method: 'get',
      url: `http://localhost:4020/cursos`,
      params: filtros,
      headers: {
        Authorization: `Bearer ${dadosAdm.token}`,
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

export async function adicionarCurso(body) {
  try {
    const { status, data } = await axios({
      method: 'post',
      url: `http://localhost:4020/cursos`,
      headers: {
        Authorization: `Bearer ${dadosAdm.token}`,
      },
      data: body,
    });

    return { status, data };
  } catch (err) {
    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function buscarCurso(id) {
  try {
    const { status, data } = await axios({
      method: 'get',
      url: `http://localhost:4020/curso/${id}`,
      headers: {
        Authorization: `Bearer ${dadosAdm.token}`,
      },
    });

    return { status, data };
  } catch (err) {
    return { status: err.response.status, data: err };
  }
}

export async function alterarCurso(body) {
  try {
    const { status, data } = await axios({
      method: 'patch',
      url: `http://localhost:4020/curso/${body.id}`,
      headers: {
        Authorization: `Bearer ${dadosAdm.token}`,
      },
      data: body,
    });

    return { status, data };
  } catch (err) {
    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function deletarCurso(id) {
  try {
    const { status, data } = await axios({
      method: 'delete',
      url: `http://localhost:4020/curso/${id}`,
      headers: {
        Authorization: `Bearer ${dadosAdm.token}`,
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
