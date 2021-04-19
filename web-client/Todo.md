# Coisas pra fazer
- [ ] Criar props de dados no UploadCard
- [ ] Como fazer ação em cada action do UploadCard?
- [ ] Mover componente NavBar pra fora do Container, na página `MyUploads`
- [ ] Corrigir lógica de `isUploading`, quando um card é invalido ou da erro
- [ ] Adicionar scroll quando feito upload


## Pontos da UI pra pensar
- [ ] Como notificar que o link foi copiado?
- [ ] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)


# Refatorações
- [ ] Pensar se vale a pena separar exports do `modules/file` pra economizar no bundle
- [ ] Repensar a forma que criei as variants dos cards, pra ver se não poderia ser um único componente, com prop de texto, no caso dos botões, ou com props que decidam algo


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
