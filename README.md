# Cursos Beta

Front realizado para avaliação técnica.

# Executar
yarn para instalar as dependencias<br />
yarn start para iniciar o projeto<br />


# Informações importantes
Observação: Por hospedar na Heroku(Serviço gratuito) e fazer conexão com meu banco Mysql, pode existir lentidão nas operações

# Credenciais para fazer login
Email: adm@cursobeta.com<br />
Senha: 123123

# Administração dos cursos:

● Listagem (Com paginação) - Rota /dashboard<br />
● Criação - Rota /dashboard/adicionarCurso<br />
● Alteração - Rota /dashboard/alterarCurso/:id<br />
● Deleção - Não possui rota, direio na listagem<br />
● Login - Rota / <br />

# Visualização de Curso
● Página para assistir/acessar um curso - Rota /curso/:id<br />
● Nome do Curso - Rota /curso/:id <br />
● Descrição do Curso - Rota /curso/:id<br />
● Vídeo do Curso - Rota /curso/:id<br />

# Busca de Curso
● Busca de cursos por Nome ou Categoria (com paginação) - Rota /buscar-cursos<br />

# Categorias
Foi criado uma tabela chamada "tb_categorias" onde está listado todas as categorias<br />

# Bônus
● Deploy da aplicação em alguma cloud (aws, heroku, Github Pages etc) - https://curso-beta-back.herokuapp.com/<br />
  Observação: Por hospedar na Heroku(Serviço gratuito) e fazer conexão com meu banco Mysql, pode existir lentidão nas operações<br />
● Validação de entrada de dados - Validado todos os dados com Schemas atráves da lib de formulário e Validators no Back-End<br />
● Autenticação de usuários - O usuario e rotas são todos autenticados e essa autenticação pode ser realizar atraves da rota /  <br />