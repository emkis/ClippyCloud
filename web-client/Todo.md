# Coisas pra fazer
- [x] Definir como o contexto de arquivos vai funcionar
- [x] Implementar contexto de arquivos
- [x] Refatorar contexto de arquivos
- [x] Trocar ref por reactive?
- [x] Como o `UploadCard` vai receber as informações do arquivo (objeto CustomFile inteiro)?
- [x] Analisar o que o `UploadCard` esta provendo
- [ ] As variants de uma parte do card, sao apenas visuais, a logica do comportamento fica onde?
- [ ] Criar interface `StoredCustomFile`
- [ ] Pensar em como o UploadCard vai utilizar esse estado pra fazer as ações
- [ ] Adicionar componente `ToggleMessage` e testes
- [ ] Adicionar variante de action que tem o `ToggleMessage`
- [ ] Adicionar scroll quando feito upload


# Pontos da UI pra pensar
- [ ] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)


# Refatorações
- [x] Corrigir lógica de `isUploading`, quando um card é invalido ou da erro (`isSettled`?)
- [x] Refatorar serviço de upload de arquivo (mudar pra função, criar tipo de retorno do serviço)
- [x] Analisar lógica de cancelamento
- [x] Analisar se faz sentido a responsabilidade de cancelamento no card
- [ ] Pensar se vale a pena separar exports do `modules/file` pra economizar no bundle


# Lasanha
- [x] Adicionar state de arquivos, pra poder alterar de página enquanto faz download
- [ ] Refatorar hook de usePageTitle
- [ ] Criar dicionário para todo os tipos de textos de actions, details do `UploadCard`
- [ ] Estudar sobre Three Shaking (se rolar tem que refatorar: [date-fns, icons])
- [ ] Configurar ação de lint antes de commit
- [ ] Analisar [repo](https://github.com/wmartins/react-circular-progress) pra ver se consigo adaptar pra usar o componente (esse anima o progresso melhor)


# Testes
- [ ] Tentar testar os testes com `skip`
- [ ] Anotar os componentes que precisam de testes
- [ ] Setup do Cypress
- [ ] Criar teste de páginas com o Cypress


# CSS
- [ ] Pensar em alguma sombra ou forma de melhorar a NavBar
- [ ] Adicionar tokens de espaçamentos
- [ ] Ver se as cores vão continuar assim (concepts, colors scss)
