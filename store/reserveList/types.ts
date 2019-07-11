/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

export type Reserve = {
  title: string
}

export type ReserveListState = {
  reserves: Reserve[]
  isReady: boolean
  error: boolean
}
