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

import { alterarCurso, buscarCurso } from '../../../services/api';

export default function Alteracao(props) {
  const history = useHistory();
  const [loader, setLoader] = useState(true);
  const [categorias, setCategorias] = useState('');

  async function buscaDados() {
    const { id } = props.match.params;

    const dados = await buscarCurso(id);

    if (dados.status !== 200) {
      return toast.error('Erro ao cursos', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    reset({
      nome: dados.data.curso.nome,
      descricao: dados.data.curso.descricao,
      categoria: {
        label: dados.data.curso.categorias.nome,
        value: dados.data.curso.categoria,
      },
      url: dados.data.curso.url,
    });

    setTimeout(() => {
      setCategorias(dados.data.categorias);
      return setLoader(false);
    }, 1200);
  }

  useEffect(() => {
    buscaDados();
  }, []);

  const schema = Yup.object().shape({
    nome: Yup.string('Nome deve ser texto').required('O nome é obrigatório'),
    descricao: Yup.string('Descrição deve ser texto').required(
      'A descrição é obrigatória'
    ),
    categoria: Yup.object().required('A categoria é obrigatória'),
    url: Yup.string('URL deve ser texto').required('A URL é obrigatória'),
  });

  const { control, handleSubmit, errors, reset } = useForm({
    validationSchema: schema,
  });

  const onSubmit = async data => {
    const { id } = props.match.params;

    const alterar = await alterarCurso({
      id,
      nome: data.nome,
      url: data.url,
      descricao: data.descricao,
      categoria: data.categoria.value,
    });

    if (alterar.status !== 200) {
      return toast.error('Erro ao alterar curso', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    toast.success('Curso alterado com sucesso!', {
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
          <h1>Alteração de cursos</h1>
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
              <Button type="submit">Alterar curso</Button>
            </ContainerButtonSubmit>
          </form>
        </Container>
      )}
    </Content>
  );
}
