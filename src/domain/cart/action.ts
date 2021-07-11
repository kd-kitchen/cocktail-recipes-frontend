import { createAction } from 'typesafe-actions'
import * as T from './types'

export const addCartItem = createAction('CART_ADD_ITEM') <T.Recipe> ();
export const removeCartItem = createAction('CART_REMOVE_ITEM') <T.Recipe> ();
