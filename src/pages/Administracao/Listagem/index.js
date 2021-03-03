import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineFieldTime, AiOutlinePushpin } from 'react-icons/ai';
import { VscEdit, VscTrash } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

// Components
import Content from '../../../components/Content';
import Button from '../../../components/Button';
import { buscarCursos, deletarCurso } from '../../../services/api';

// Loader
import LoaderComponent from '../../../components/LoaderComponent';

import {
  Container,
  ContainerVideos,
  Box,
  ContainerNovoCurso,
  ContainerAcoesBotoes,
  ContainerFiltros,
} from './styles';

import NotFound from '../../../components/NotFound';

export default function Listagem() {
  const [dados, setDados] = useState('');
  const [loader, setLoader] = useState(true);
  const [filtros, setFiltros] = useState({
    limit: 5,
    offset: 0,
  });
  const [limit, setLimit] = useState(5);
  const [totalCursos, setTotalCursos] = useState(0);

  async function buscaCursos() {
    setLoader(true);
    const busca = await buscarCursos(filtros);

    if (busca.status !== 200) {
      return toast.error('Erro ao buscar cursos', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    setDados(busca.data.rows);

    setTimeout(() => {
      setLoader(false);
      return setTotalCursos(busca.data.count);
    }, 1200);
  }

  async function deletaCurso(id) {
    const deletar = await deletarCurso(id);

    if (deletar.status !== 200) {
      return toast.error('Erro ao deletar o curso', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    toast.success('Curso deletado com sucesso!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    buscaCursos();
  }

  function lastMinutes(date) {
    const diff = Math.abs(new Date() - new Date(date));

    return `${Math.floor(diff / 1000 / 60)} minutos atrás`;
  }

  useEffect(() => {
    buscaCursos();
  }, [filtros]);

  return (
    <Content>
      {loader ? (
        <LoaderComponent />
      ) : (
        <Container>
          <ContainerNovoCurso>
            <Link to="/dashboard/adicionarCurso">
              <Button>Adicionar novo curso</Button>
            </Link>
          </ContainerNovoCurso>
          <h1>Listagem de cursos</h1>
          <ContainerVideos>
            {dados
              ? dados.map(item => {
                  return (
                    <Box className="hvr-float-shadow">
                      <iframe width="400" height="200" src={item.url} />
                      <ContainerAcoesBotoes>
                        <Link
                          to={`/dashboard/alterarCurso/${item.id}`}
                          aria-label="Editar curso"
                          data-balloon-pos="up"
                        >
                          <VscEdit />
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            deletaCurso(item.id);
                          }}
                          aria-label="Deletar curso"
                          data-balloon-pos="up"
                        >
                          <VscTrash />
                        </button>
                      </ContainerAcoesBotoes>
                      <h2>{item.nome}</h2>
                      <p className="descricao">{item.descricao}</p>
                      <div>
                        <div className="icon-text">
                          <AiOutlinePushpin />
                          <b>Categoria:</b>
                          <p>{item.categorias.nome}</p>
                        </div>
                        <div className="icon-text">
                          <AiOutlineFieldTime />
                          <b>Publicado em:</b>
                          <p>{lastMinutes(item.criado_em)}</p>
                        </div>
                      </div>
                      <Link to={`/curso/${item.id}`}>
                        <Button className="button-assistir">Assistir</Button>
                      </Link>
                    </Box>
                  );
                })
              : 'error'}
          </ContainerVideos>
          {totalCursos ? (
            <ContainerFiltros>
              <ReactPaginate
                previousLabel="Anterior"
                nextLabel="Próximo"
                breakLabel="..."
                pageCount={totalCursos / 6}
                marginPagesDisplayed={5}
                pageRangeDisplayed={5}
                onPageChange={e => {
                  const currentPage = e.selected + 1;
                  setFiltros({
                    limit,
                    offset: (currentPage - 1) * limit,
                  });
                }}
                activeClassName="active"
              />
            </ContainerFiltros>
          ) : (
            <NotFound />
          )}
        </Container>
      )}
    </Content>
  );
}
