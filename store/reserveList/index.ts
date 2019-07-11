import { Module } from 'vuex'
import { RootState } from '../types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { ReserveListState } from './types'

export const state: ReserveListState = {
  reserves: [],
  isReady: false,
  error: false
}

const namespaced: boolean = true

export const profile: Module<ReserveListState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
