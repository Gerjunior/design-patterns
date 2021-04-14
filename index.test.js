import { deepStrictEqual, ok } from 'assert'

import Builder from './src/builder.js'
import DatabaseSingleton from './src/singleton.js'
import * as colors from './src/colors.js'

;(async () => {
  {
    const user = new Builder().withEmail().build()
    const expected = { name: 'John Doe', email: 'john.doe@email.com' }

    deepStrictEqual(user, expected)

    console.log(colors.green, 'Builder Test Passed!\n')
  }
  {
    const instance = DatabaseSingleton.getInstance()

    ok(instance instanceof DatabaseSingleton)
    console.log(colors.green, 'The object is an instance of DatabaseSingleton\n')

    instance.user = { name: 'John' }

    const secondInstance = DatabaseSingleton.getInstance()
    secondInstance.user = { name: 'X Æ A-Xii' }

    deepStrictEqual(instance.user, secondInstance.user)

    console.log(
      colors.green,
      `The user from the first instance is the same as the second instance!
  First Instance Name: ${instance.user.name}`,
    )
  }
})()
