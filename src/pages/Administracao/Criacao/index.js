import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

// Components
import Content from '../../../components/Content';
import { Input, Select } from '../../../components/Form';
import Button from '../../../components/Button';
import LoaderComponent from '../../../components/LoaderComponent';

import { Container, ContainerButtonSubmit } from './styles';

import { buscarCategorias, adicionarCurso } from '../../../services/api';

export default function Criacao() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const [loader, setLoader] = useState(true);

  async function buscaCategorias() {
    const dados = await buscarCategorias();

    if (dados.status !== 200) {
      return toast.error('Erro ao buscar categorias', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    setTimeout(() => {
      setLoader(false);
      return setCategorias(dados.data);
    }, 1200);
  }
  useEffect(() => {
    buscaCategorias();
  }, []);

  const schema = Yup.object().shape({
    nome: Yup.string('Nome deve ser texto').required('O nome é obrigatório'),
    descricao: Yup.string('Descrição deve ser texto').required(
      'A descrição é obrigatória'
    ),
    categoria: Yup.object().required('A categoria é obrigatória'),
    url: Yup.string('URL deve ser texto').required('A URL é obrigatória'),
  });

  const { control, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = async data => {
    const salvar = await adicionarCurso({
      nome: data.nome,
      url: data.url,
      descricao: data.descricao,
      categoria: data.categoria.value,
    });

    if (salvar.status !== 200) {
      return toast.error('Erro ao buscar categorias', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    toast.success('Curso criado com sucesso!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(() => {
      return history.push('/dashboard');
    }, 2000);
  };

  return (
    <Content>
      {loader ? (
        <LoaderComponent />
      ) : (
        <Container>
          <h1>Criação de cursos</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              nome="nome"
              type="text"
              id="nome"
              label="Nome"
              control={control}
              error={errors.nome ? errors.nome.message : ''}
            />
            <Input
              nome="descricao"
              type="text"
              id="descricao"
              label="Descrição"
              control={control}
              error={errors.descricao ? errors.descricao.message : ''}
            />
            <Select
              nome="categoria"
              type="text"
              id="categoria"
              label="Categoria"
              control={control}
              error={errors.categoria ? errors.categoria.message : ''}
              options={categorias}
              placeholder=""
            />
            <Input
              nome="url"
              type="text"
              id="url"
              label="URL do vídeo"
              control={control}
              error={errors.url ? errors.url.message : ''}
            />
            <ContainerButtonSubmit>
              <Button type="submit">Criar curso</Button>
            </ContainerButtonSubmit>
          </form>
        </Container>
      )}
    </Content>
  );
}
