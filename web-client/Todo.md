# Coisas pra fazer
- [ ] Adicionar lógica para pegar extensão do arquivo
- [ ] Adicionar prop extensão em todas as interfaces necessárias
- [ ] Revisar como esta sendo utilizado a finalização do mandar arquivo pro server (ver se faz sentido estar ali)
- [ ] Remover props desnecessárias do `FileCard`, e passar apenas File com a nova interface
- [ ] Remover lógica de expiração de dentro do `FileCard`
- [ ] Dividir as lógicas da página `MyUploads` em features (scroll, arquivos)
- [ ] Caso a tab inicial esteja disabled, mover pra próxima


# Pontos da UI pra pensar
- [ ] Como mostrar o estado de drop na página inteira
- [ ] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)


# Refatorações
- [ ] Adicionar função utilitária de smooth scroll mais compatível
- [ ] Corrigir scroll dos cards, focar bem no começo, onde pega o titulo e a primeira fila
- [ ] Corrigir scroll dos cards, quando arquivo removido
- [ ] Pensar se vale a pena separar exports do `modules/file` pra economizar no bundle


# Lasanha
- [ ] Atualizar state das páginas que lidam com arquivos depois de retornar pra janela do browser
- [ ] Refatorar hook de usePageTitle
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
