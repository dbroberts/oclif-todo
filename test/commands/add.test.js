const {expect, test} = require('@oclif/test')

describe('add', () => {
  test
  .stdout()
  .command(['add'])
  .it('runs add without a param', ctx => {
    expect(ctx.stdout).to.contain('Task name not specified')
  })

  test
  .stdout()
  .command(['add', '--task', 'welcome'])
  .it('runs add --task ="welcome"', ctx => {
    expect(ctx.stdout).to.contain("task: 'welcome'")
  })
})
