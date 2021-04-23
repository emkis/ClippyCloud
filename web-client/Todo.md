# Coisas pra fazer
- [ ] Criar variant de card para cancelamento
- [ ] Criar pasta de contexto, mover hook de usuário pra lá
- [ ] Definir em como o contexto de arquivos vai funcionar
- [ ] Pensar em como o UploadCard vai utilizar esse estado pra fazer as ações
- [ ] Corrigir lógica de `isUploading`, quando um card é invalido ou da erro
- [ ] Adicionar componente `ToggleMessage` e testes
- [ ] Adicionar scroll quando feito upload


# Pontos da UI pra pensar
- [ ] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)


# Refatorações
- [ ] Analisar props enviadas pro `UploadCard` (talvez de pra remover algumas)
- [ ] Analisar lógica de cancelamento
- [ ] Analisar se faz sentido a responsabilidade de cancelamento no card
- [ ] Pensar se vale a pena separar exports do `modules/file` pra economizar no bundle
- [ ] Repensar a forma que criei as variants dos cards, pra ver se não poderia ser um único componente, com prop de texto, no caso dos botões, ou com props que decidam algo


# Lasanha
- [ ] Adicionar state de arquivos, pra poder alterar de página enquanto faz download


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
