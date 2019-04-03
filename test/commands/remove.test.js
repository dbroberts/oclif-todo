const {expect, test} = require('@oclif/test')

describe('remove', () => {
  test
  .stdout()
  .command(['remove'])
  .it('runs remove without any params', ctx => {
    expect(ctx.stdout).to.contain('Task id not specified')
  })

  test
  .stdout()
  .command(['remove', '--id', '1'])
  .it('runs remove --id=1', ctx => {
    expect(ctx.stdout).to.contain('id: 1')
  })
})
