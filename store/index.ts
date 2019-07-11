/**
 * Copyright(c) 2019
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import { Store, StoreOptions } from 'vuex'
import { RootState } from './types'
import { reserveList } from './reserveList'

const storeOptions: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  actions: {
    // nuxtServerInit({ commit }, { app }) {
    // }
  },
  modules: {
    reserveList
  }
}

export default () => new Store<RootState>(storeOptions)
