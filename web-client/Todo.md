# Coisas pra fazer
- [ ] Como mostrar o estado de drop na página inteira
- [ ] Adicionar eventos customizados do GTM


# Refatorações
- [ ] Dividir as lógicas da página `MyUploads` em features (scroll, arquivos)
- [ ] Refatorar lógica do sendToServer
- [ ] Corrigir scroll dos cards, focar bem no começo, onde pega o titulo e a primeira fila
- [ ] Corrigir scroll dos cards, quando arquivo removido
- [ ] Atualizar state das páginas que lidam com arquivos depois de retornar pra janela do browser
- [ ] Estudar sobre Three Shaking (se rolar tem que refatorar: [date-fns, icons])


# Testes
- [ ] Criar os testes com `skip`
- [ ] Setup do Cypress


# Para testar
- [x] utilities/
- [x] services/
  - [x] storage/
  - [x] theme/
  - [x] api/
    - [x] wake-up-api/
    - [ ] file-upload/ (faltam alguns casos)
- [x] configs/
- [ ] pages/
  - [x] Home/
  - [ ] Upload/
    - [ ] Upload.vue
      - [ ] components/
        - [ ] FileUploader.vue
      - [ ] composables/
        - [ ] useDropFiles.ts
  - [ ] MyUploads/
    - [ ] MyUploads.vue
      - [ ] components/
        - [ ] EmptyState.vue
- [ ] modules/
  - [ ] file/
    - [ ] functions.ts (ta quase la)
- [ ] hooks/
  - [x] page-title/
  - [ ] app-scroll/ (testes existem mas com skip)
- [ ] contexts/
  - [ ] user/
  - [ ] file/
- [ ] components/
  - [x] Button/
  - [x] ButtonCopy/
  - [x] Navbar/
  - [ ] Tab/
    - [x] hook.ts
    - [ ] TabContext.vue
    - [ ] Tab.vue
    - [ ] TabLayout.vue
    - [ ] TabList.vue
  - [ ] ProgressCircle/
  - [ ] Card/
    - [ ] BaseCard.vue
    - [ ] FileCard/
    - [ ] UploadCard/

