const {expect, test} = require('@oclif/test')

describe('update', () => {
  test
  .stdout()
  .command(['update'])
  .it('runs update without any params', ctx => {
    expect(ctx.stdout).to.contain('Task id not specified')
  })

  test
  .stdout()
  .command(['update', '--id', '1'])
  .it('runs update on task 1', ctx => {
    expect(ctx.stdout).to.contain('done')
  })
})
