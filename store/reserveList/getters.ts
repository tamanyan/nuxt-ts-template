/**
 * Copyright(c) 2019
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { ReserveListState } from './types'

export const getters: GetterTree<ReserveListState, RootState> = {
  fullName(state: ReserveListState): string {
    const { reserves } = state

    return `${reserves[0].title}`
  }
}
