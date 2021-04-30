# Coisas pra fazer
- [ ] Criar componente `ButtonCopy`
- [ ] Criar testes do componente `ButtonCopy`
- [ ] Refatorar UploadCard success action pra usar o `ButtonCopy`, e também o FileCard não expirado
- [ ] Adicionar scroll quando feito upload
- [ ] Pensar em como lidar com o LocalStorage
- [ ] Pensar em como a página MyUploads vai lidar com os arquivos
- [ ] Ideia: Criar novo contexto pra arquivos do LocalStorage?
- [ ] Criar interface `StoredCustomFile` (precisa ter data de upload do arquivo)
- [ ] Caso a tab inicial esteja disabled, mover pra próxima


# Pontos da UI pra pensar
- [ ] Como mostrar o estado de drop na página inteira
- [ ] Deveria alterar o estado do card depois do upload dar certo? (thumb talvez)


# Refatorações
- [ ] Pensar em como refatorar a troca do componente de progresso no UploadCard
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
