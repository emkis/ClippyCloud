# Coisas pra fazer
- [x] Lidar na UI com os cards de erro
- [x] Separar Logica de upload
- [ ] Criar props de dados no UploadCard
- [x] Refatorar logica de upload
- [ ] Como fazer ação em cada action do UploadCard?


## Pontos da UI pra pensar
- [ ] Como notificar que o link foi copiado?
- [ ] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)
- [x] Vale a pena ter o "Try Again" quando arquivo for invalido?
- [x] Deveria alterar o texto "Uploading `0` files" depois que ja fez upload de todos?


# Refatorações
- [ ] Pensar se vale a pena separar exports do `modules/file` pra economizar no bundle
- [ ] Repensar a forma que criei as variants dos cards, pra ver se não poderia ser um único componente, com prop de texto, no caso dos botões, ou com props que decidam algo
- [x] Criar constante pra definir o máximo limite do tamanho de um arquivo
- [x] Fazer com o que texto "File bigger than 100mb" seja dinâmico de acordo com o limite do tamanho do arquivo


# Testes
- [ ] Tentar testar os testes com `skip`
- [ ] Anotar os componentes que precisam de testes
- [ ] Setup do Cypress
- [ ] Criar teste de páginas com o Cypress


# Processos
- [ ] Estudar sobre Three Shaking (se rolar tem que refatorar: [date-fns, icons])
- [ ] Configurar ação de lint antes de commit


# CSS
- [ ] Pensar em alguma sombra ou forma de melhorar a NavBar
- [ ] Adicionar tokens de espaçamentos
- [ ] Ver se as cores vão continuar assim (concepts, colors scss)
