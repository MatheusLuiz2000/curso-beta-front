# Cursos Beta

Front realizado para avaliação técnica.

# Executar
yarn para instalar as dependencias
yarn start para iniciar o projeto

Foi proposto as seguintes telas:

# Informações importantes
Observação: Por hospedar na Heroku(Serviço gratuito) e fazer conexão com meu banco Mysql, pode existir lentidão nas operações

# Credenciais para fazer login
Email: adm@cursobeta.com
Senha: 123123

# Administração dos cursos:

● Listagem (Com paginação) - Rota /dashboard
● Criação - Rota /dashboard/adicionarCurso
● Alteração - Rota /dashboard/alterarCurso/:id
● Deleção - Não possui rota, direio na listagem
● Login - Rota /

# Visualização de Curso
● Página para assistir/acessar um curso - Rota /curso/:id
● Nome do Curso - Rota /curso/:id 
● Descrição do Curso - Rota /curso/:id
● Vídeo do Curso - Rota /curso/:id

# Busca de Curso
● Busca de cursos por Nome ou Categoria (com paginação) - Rota /buscar-cursos

# Categorias
Foi criado uma tabela chamada "tb_categorias" onde está listado todas as categorias

# Bônus
● Deploy da aplicação em alguma cloud (aws, heroku, Github Pages etc) - https://curso-beta-back.herokuapp.com/
  Observação: Por hospedar na Heroku(Serviço gratuito) e fazer conexão com meu banco Mysql, pode existir lentidão nas operações
● Validação de entrada de dados - Validado todos os dados com Schemas atráves da lib de formulário e Validators no Back-End
● Autenticação de usuários - O usuario e rotas são todos autenticados e essa autenticação pode ser realizar atraves da rota /login

# Estrutura do Banco de Dados
![](banco-de-dados.png)