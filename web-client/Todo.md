# Coisas pra fazer
- [ ] Definir pra onde mover o contexto dos arquivos que foi feito upload
- [ ] Refatorar contextos para nova forma definida
- [ ] Alterar a forma como é definido as cores dos arquivos (aleatório só uma vez)
- [ ] Guardar no contexto a cor do arquivo
- [ ] Dividir as lógicas da página `MyUploads` em features (scroll, arquivos)


# Pontos da UI pra pensar
- [ ] Como mostrar o estado de drop na página inteira


# Refatorações
- [ ] Corrigir scroll dos cards, focar bem no começo, onde pega o titulo e a primeira fila
- [ ] Corrigir scroll dos cards, quando arquivo removido


# Lasanha
- [ ] Atualizar state das páginas que lidam com arquivos depois de retornar pra janela do browser
- [ ] Estudar sobre Three Shaking (se rolar tem que refatorar: [date-fns, icons])


# Testes
- [ ] Criar os testes com `skip`
- [ ] Setup do Cypress

# Para testar
- [x] utilities/
  - [x] generators/
  - [x] numbers/
  - [x] strings/

- [x] services/
  - [x] storage/
  - [x] theme/
  - [x] api/
    - [x] wake-up-api/
    - [ ] file-upload/ (faltam alguns casos)

- [x] configs/
  - [x] environment.ts

- [ ] pages/
  - [ ] Home/
    - [x] Home.vue
    - [ ] components/
      - [ ] CardInfo.vue
    - [ ] sections/
      - [ ] SectionHero.vue
      - [ ] SectionHowItWorks.vue
      - [ ] SectionFooter.vue

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
    - [ ] functions.ts

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

