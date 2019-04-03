const {expect, test} = require('@oclif/test')

describe('show', () => {
  test
  .stdout()
  .command(['show'])
  .it('runs show', ctx => {
    expect(ctx.stdout).to.contain('NOT DONE')
  })
})
