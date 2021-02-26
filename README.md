# Cursos Beta

Front realizado para avaliação técnica.

# Executar
yarn para instalar as dependencias&nbsp;
yarn start para iniciar o projeto&nbsp;

Foi proposto as seguintes telas:&nbsp;

# Informações importantes
Observação: Por hospedar na Heroku(Serviço gratuito) e fazer conexão com meu banco Mysql, pode existir lentidão nas operações

# Credenciais para fazer login
Email: adm@cursobeta.com&nbsp;
Senha: 123123

# Administração dos cursos:

● Listagem (Com paginação) - Rota /dashboard&nbsp;
● Criação - Rota /dashboard/adicionarCurso&nbsp;
● Alteração - Rota /dashboard/alterarCurso/:id&nbsp;
● Deleção - Não possui rota, direio na listagem&nbsp;
● Login - Rota /&nbsp;

# Visualização de Curso
● Página para assistir/acessar um curso - Rota /curso/:id&nbsp;
● Nome do Curso - Rota /curso/:id &nbsp;
● Descrição do Curso - Rota /curso/:id&nbsp;
● Vídeo do Curso - Rota /curso/:id&nbsp;

# Busca de Curso
● Busca de cursos por Nome ou Categoria (com paginação) - Rota /buscar-cursos&nbsp;

# Categorias
Foi criado uma tabela chamada "tb_categorias" onde está listado todas as categorias&nbsp;

# Bônus
● Deploy da aplicação em alguma cloud (aws, heroku, Github Pages etc) - https://curso-beta-back.herokuapp.com/&nbsp;
  Observação: Por hospedar na Heroku(Serviço gratuito) e fazer conexão com meu banco Mysql, pode existir lentidão nas operações&nbsp;
● Validação de entrada de dados - Validado todos os dados com Schemas atráves da lib de formulário e Validators no Back-End&nbsp;
● Autenticação de usuários - O usuario e rotas são todos autenticados e essa autenticação pode ser realizar atraves da rota /login&nbsp;