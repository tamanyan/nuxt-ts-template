/**
 * Copyright(c) 2019
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import { MutationTree } from 'vuex'
import { ReserveListState, Reserve } from './types'

export const mutations: MutationTree<ReserveListState> = {
  profileLoaded(state: ReserveListState, payload: [Reserve]) {
    state.reserves = payload
    state.error = false
    state.isReady = true
  },
  profileError(state: ReserveListState) {
    state.error = true
    state.isReady = false
  }
}
