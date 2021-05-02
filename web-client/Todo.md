# Coisas pra fazer
- [x] Analisar o prevent scroll no mobile
- [x] Analisar o prevent com body e html
- [x] Adicionar scroll quando feito upload
- [x] Criar componente `ButtonCopy`
- [x] Criar testes do componente `ButtonCopy`
- [x] Refatorar UploadCard success action pra usar o `ButtonCopy`, e também o FileCard não expirado

- [ ] Pensar em como lidar com o LocalStorage
- [ ] Pensar em como a página MyUploads vai lidar com os arquivos
- [ ] Ideia: Criar novo contexto pra arquivos do LocalStorage?
- [ ] Criar interface `StoredCustomFile` (precisa ter data de upload do arquivo)
- [ ] Caso a tab inicial esteja disabled, mover pra próxima


# Pontos da UI pra pensar
- [ ] Como mostrar o estado de drop na página inteira
- [ ] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)


# Refatorações
- [x] Pensar em como refatorar a troca do componente de progresso no UploadCard

- [ ] Adicionar função utilitária de smooth scroll mais compatível
- [ ] Corrigir scroll dos cards, focar bem no começo, onde pega o titulo e a primeira fila
- [ ] Corrigir scroll dos cards, quando arquivo removido
- [ ] Utilização de render functions para retornar diretamente pelo setup
- [ ] Pensar se vale a pena separar exports do `modules/file` pra economizar no bundle


# Lasanha
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
