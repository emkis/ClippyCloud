# Coisas pra fazer
- [ ] Revisar como esta sendo utilizado a finalização do mandar arquivo pro server (ver se faz sentido estar ali) acho que daria pra pegar isso dando um watch nos files e fazendo um filter
- [ ] Dividir as lógicas da página `MyUploads` em features (scroll, arquivos)


# Pontos da UI pra pensar
- [ ] Como mostrar o estado de drop na página inteira


# Refatorações
- [ ] Adicionar função utilitária de smooth scroll mais compatível
- [ ] Corrigir scroll dos cards, focar bem no começo, onde pega o titulo e a primeira fila
- [ ] Corrigir scroll dos cards, quando arquivo removido
- [ ] Converter os enums do theme pra normal (e remover as variaveis usando eles quando nao precisava)
- [ ] Pensar se vale a pena separar exports do `modules/file` pra economizar no bundle


# Lasanha
- [ ] Atualizar state das páginas que lidam com arquivos depois de retornar pra janela do browser
- [ ] Refatorar hook de usePageTitle
- [ ] Adicionar GitHub Actions
- [ ] Estudar sobre Three Shaking (se rolar tem que refatorar: [date-fns, icons])
- [ ] Configurar ação de lint antes de commit


# Testes
- [ ] Criar os testes com `skip`
- [ ] Anotar os componentes que precisam de testes
- [ ] Setup do Cypress
- [ ] Criar teste de páginas com o Cypress


# CSS
- [ ] Pensar em alguma sombra ou forma de melhorar a NavBar
- [ ] Adicionar tokens de espaçamentos
- [ ] Ver se as cores vão continuar assim (concepts, colors scss)
