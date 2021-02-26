import React, { useState, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { AiOutlineFieldTime, AiOutlinePushpin } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import Content from '../../components/Content';
import { Input, Select } from '../../components/Form';
import LoaderComponent from '../../components/LoaderComponent';

import Button from '../../components/Button';

// JSON
import Opcoes from '../../assets/json/Opcoes';

// API
import { buscarCursos } from '../../services/api';

import {
  ContainerFiltros,
  ContainerPaginate,
  ContainerCursos,
  ContainerNotFound,
  Box,
} from './styles';

export default function BuscaCursos() {
  const [cursos, setCursos] = useState([]);
  const [loader, setLoader] = useState(true);
  const [totalCursos, setTotalCursos] = useState('');
  const [offset, setOffset] = useState(0);

  async function buscarCursosAPI(opcoes) {
    const buscar = await buscarCursos({
      limit: 5,
      offset,
      valor: opcoes ? opcoes.valor : '',
      opcao: opcoes ? opcoes.opcao.value : '',
    });

    if (buscar.status !== 200) {
      return toast.error('Erro ao buscar cursos', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    setCursos(buscar.data.rows);
    setTotalCursos(buscar.data.count);

    setTimeout(() => {
      return setLoader(false);
    }, 1200);
  }

  useLayoutEffect(() => {
    buscarCursosAPI();
  }, [offset]);

  const { control, handleSubmit } = useForm();

  async function onSubmit(e) {
    if (!e.opcao) {
      return toast.error('Preencha os campos para busca', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    return buscarCursosAPI(e);
  }

  return (
    <Content>
      {loader ? (
        <LoaderComponent />
      ) : (
        <>
          <ContainerFiltros>
            <h3>Filtros:</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                nome="valor"
                id="valor"
                label="Busca por"
                control={control}
              />
              <Select
                nome="opcao"
                id="opcao"
                control={control}
                label="Opções"
                options={Opcoes}
              />
              <Button>Realizar busca</Button>
            </form>
          </ContainerFiltros>
          <ContainerCursos>
            {cursos.length > 0 ? (
              cursos.map(item => {
                return (
                  <Box className="hvr-float-shadow">
                    <iframe width="400" height="200" src={item.url} />
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
                        <p>
                          {new Date(item.criado_em).getMinutes() + 30} minutos
                          atrás
                        </p>
                      </div>
                    </div>
                    <Link to={`/curso/${item.id}`}>
                      <Button className="button-assistir">Assistir</Button>
                    </Link>
                  </Box>
                );
              })
            ) : (
              <ContainerNotFound>
                <h1>Não encontramos cursos</h1>
              </ContainerNotFound>
            )}
          </ContainerCursos>
          <ContainerPaginate>
            {totalCursos ? (
              <ReactPaginate
                previousLabel="Anterior"
                nextLabel="Próximo"
                breakLabel="..."
                pageCount={totalCursos / 5}
                marginPagesDisplayed={5}
                pageRangeDisplayed={5}
                onPageChange={e => {
                  const currentPage = e.selected + 1;
                  setOffset((currentPage - 1) * 5);
                }}
                activeClassName="active"
              />
            ) : (
              ''
            )}
          </ContainerPaginate>
        </>
      )}
    </Content>
  );
}
