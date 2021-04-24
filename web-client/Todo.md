# Coisas pra fazer
- [x] Criar variant de card para cancelamento
- [x] Criar pasta de contexto, mover hook de usuário pra lá
- [x] Refatorar todas as variantes para utilizar a composição
- [ ] Definir como o contexto de arquivos vai funcionar
- [ ] Pensar em como o UploadCard vai utilizar esse estado pra fazer as ações
- [ ] Corrigir lógica de `isUploading`, quando um card é invalido ou da erro
- [ ] Adicionar componente `ToggleMessage` e testes
- [ ] Adicionar variante de action que tem o `ToggleMessage`
- [ ] Adicionar scroll quando feito upload


# Pontos da UI pra pensar
- [ ] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)


# Refatorações
- [ ] Refatorar serviço de upload de arquivo (mudar pra função, criar tipo de retorno do serviço)
- [ ] Analisar props enviadas pro `UploadCard` (talvez de pra remover algumas)
- [ ] Analisar lógica de cancelamento
- [ ] Analisar se faz sentido a responsabilidade de cancelamento no card
- [ ] Pensar se vale a pena separar exports do `modules/file` pra economizar no bundle
- [ ] Repensar a forma que criei as variants dos cards, pra ver se não poderia ser um único componente, com prop de texto, no caso dos botões, ou com props que decidam algo


# Lasanha
- [ ] Adicionar state de arquivos, pra poder alterar de página enquanto faz download
- [ ] Refatorar hook de usePageTitle
- [ ] Criar dicionário para todo os tipos de textos de actions, details do `UploadCard`
- [ ] Analisar [repo](https://github.com/wmartins/react-circular-progress) pra ver se consigo adaptar pra usar o componente (esse anima o progresso melhor)


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
