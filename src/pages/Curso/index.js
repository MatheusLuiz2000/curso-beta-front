import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AiOutlineFieldTime, AiOutlinePushpin } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';

import {
  Container,
  ContainerInformacoes,
  ContainerGrid,
  ContainerStars,
} from './styles';

import Content from '../../components/Content';
import Button from '../../components/Button';
import LoaderComponent from '../../components/LoaderComponent';

import { buscarCurso } from '../../services/api';

export default function Curso(props) {
  const [video, setVideo] = useState('');
  const [loader, setLoader] = useState(true);

  async function buscaVideo() {
    const { id } = props.match.params;

    const busca = await buscarCurso(id);

    if (!busca) {
      return toast.error('Erro ao cursos', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    setTimeout(() => {
      setVideo(busca.data.curso);
      return setLoader(false);
    }, 1200);
  }

  useEffect(() => {
    buscaVideo();
  }, []);

  return (
    <Content>
      <Container>
        {!loader ? (
          <>
            <ContainerInformacoes>
              <h1>{video.nome}</h1>
              <ContainerGrid>
                <div>
                  <h2>Descrição</h2>
                  <p className="descricao">{video.descricao}</p>
                  <div className="icon-text">
                    <AiOutlinePushpin />
                    <b>Categoria:</b>
                    <p>{video.categorias.nome}</p>
                  </div>
                  <div className="icon-text">
                    <AiOutlineFieldTime />
                    <b>Publicado em:</b>
                    <p>
                      {new Date(video.criado_em).getMinutes() + 30} minutos
                      atrás
                    </p>
                  </div>
                  <ContainerStars>
                    <h3>Gostou? Avalie!</h3>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </ContainerStars>
                  <Link to="/buscar-cursos">
                    <Button>Buscar novos cursos</Button>
                  </Link>
                </div>
                <iframe src={video.url} />
              </ContainerGrid>
            </ContainerInformacoes>
          </>
        ) : (
          <LoaderComponent />
        )}
      </Container>
    </Content>
  );
}
