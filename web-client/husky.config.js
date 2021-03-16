module.exports = {
  hooks: {
    'pre-push': 'yarn lint -- --fix && yarn test:unit',
  },
}
