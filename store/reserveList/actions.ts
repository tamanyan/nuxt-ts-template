/**
 * Copyright(c) 2019
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

// import axios from 'axios';
import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '../types'
import { ReserveListState } from './types'

export const actions: ActionTree<ReserveListState, RootState> = {
  fetchData(context: ActionContext<ReserveListState, RootState>): any {
    const payload = [
      {
        title: 'Title1'
      },
      {
        title: 'Title2'
      }
    ]

    context.commit('profileLoaded', payload)

    // Make http request in order to get user info instead of mock
  }
}
