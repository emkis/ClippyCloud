# Coisas pra fazer
[] Lidar na UI com os cards de erro
[] Separar Logica de upload
[] Criar props de dados no UploadCard
[] Refatorar logica de upload
[] Como fazer ação em cada action do UploadCard?


## Pontos da UI pra pensar
[] Como notificar que o link foi copiado?
[] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)
[] Vale a pena ter o "Try Again" quando arquivo for invalido?
[] Deveria alterar o texto "Uploading `0` files" depois que ja fez upload de todos?


# Refatorações
[] Criar helpers com `computed` pros casos de: `isUploadComplete` e `formattedFileSize`
[] Criar constante pra definir o máximo limite do tamanho de um arquivo
[] Fazer com o que texto "File bigger than 100mb" seja dinâmico de acordo com o limite do tamanho do arquivo


# Testes
[] Tentar testar os testes com `skip`
[] Anotar os componentes que precisam de testes
[] Setup do Cypress
[] Criar teste de páginas com o Cypress


# Processos
[] Estudar sobre Three Shaking
[] Configurar ação de lint antes de commit


# CSS
[] Pensar em alguma sombra ou forma de melhorar a NavBar
[] Adicionar tokens de espaçamentos
[] Ver se as cores vão continuar assim (concepts, colors scss)
