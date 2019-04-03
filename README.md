todocli
=======

Simple node.js todocli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/dbroberts/oclif-todo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Issues](#issues)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
todocli/0.0.1 win32-x64 node-v10.15.0
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add`](#todocli-add)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli remove`](#todocli-remove)
* [`todocli show`](#todocli-show)
* [`todocli update`](#todocli-update)

## `todocli add`

Adds a new todo

```
USAGE
  $ todocli add

OPTIONS
  -n, --task=task  task

DESCRIPTION
  ...
  Adds a new todo to the existing list
```

_See code: [src\commands\add.js](https://github.com/dbroberts/oclif-todo/blob/v0.0.1/src\commands\add.js)_

## `todocli help [COMMAND]`

display help for todocli

```
USAGE
  $ todocli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src\commands\help.ts)_

## `todocli remove`

Describe the command here

```
USAGE
  $ todocli remove

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src\commands\remove.js](https://github.com/dbroberts/oclif-todo/blob/v0.0.1/src\commands\remove.js)_

## `todocli show`

Shows existing tasks

```
USAGE
  $ todocli show

DESCRIPTION
  ...
  Shows all the tasks sorted by their ids
```

_See code: [src\commands\show.js](https://github.com/dbroberts/oclif-todo/blob/v0.0.1/src\commands\show.js)_

## `todocli update`

Marks a task as done

```
USAGE
  $ todocli update

OPTIONS
  -n, --id=id  task id

DESCRIPTION
  ...
  Marks a task as done
```

_See code: [src\commands\update.js](https://github.com/dbroberts/oclif-todo/blob/v0.0.1/src\commands\update.js)_
<!-- commandsstop -->

# Issues
## Required parameters
Several of the commands, like add, update, and remove require a name or id parameter (or flag).  There is support in oclif for defining required flags, but when defined as such via <command>.flags, the resulting error message apears to be directed to stderr instead of stdout, and I was unable to get the mocha tests to verify stderr output.  For this reason, required params are currently validated during the Command.run function.  This is an area that could be improved.

## Unit Tests
The mocha unit tests are not complete. They cover all code branches, but depend on todo database state.  These need to be refined so they are more robust and can execute even when no tasks have been defined.
