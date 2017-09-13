import cart from './cart'
import { getAddedIds, getQuantity } from './cart'

describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      addedIds: [],
      quantityById: {}
    }

    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('should handle CHECKOUT_REQUEST action', () => {
      expect(cart({}, { type: 'CHECKOUT_REQUEST' })).toEqual(initialState)
    })

    it('should handle CHECKOUT_FAILURE action', () => {
      expect(cart({}, { type: 'CHECKOUT_FAILURE', cart: 'cart state' })).toEqual('cart state')
    })

    it('should handle ADD_TO_CART action', () => {
      expect(cart(initialState, { type: 'ADD_TO_CART', productId: 1 })).toEqual({
        addedIds: [ 1 ],
        quantityById: { 1: 1 }
      })
    })

    describe('when product is already in cart', () => {
      it('should handle ADD_TO_CART action 1', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 1 }
        }

        expect(cart(state, { type: 'ADD_TO_CART', productId: 2 })).toEqual({
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 2 }
        })
      })

      it('should handle ADD_TO_CART action 2', () => {
        const state = {
          addedIds: [ 1, 2, 3 ],
          quantityById: { 1: 1, 2: 2, 3:3 }
        }

        expect(cart(state, { type: 'ADD_TO_CART', productId: 3 })).toEqual({
          addedIds: [ 1, 2, 3 ],
          quantityById: { 1: 1, 2: 2, 3:4 }
        })
      })

      it('should handle REMOVE_FROM_CART action 1', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 2 }
        }

        expect(cart(state, { type: 'REMOVE_FROM_CART', productId: 2 })).toEqual({
          addedIds: [ 1 ],
          quantityById: { 1: 1 }
        })
      })

      it('should handle REMOVE_FROM_CART action 2', () => {
        const state = {
          addedIds: [ 1, 2, 3, 4 ],
          quantityById: { 1: 1, 2: 2, 3: 2, 4: 5 }
        }

        expect(cart(state, { type: 'REMOVE_FROM_CART', productId: 1 })).toEqual({
          addedIds: [ 2, 3, 4 ],
          quantityById: { 2: 2, 3: 2, 4: 5 }
        })
      })

      it('should handle REMOVE_FROM_CART action 3', () => {
        const state = {
          addedIds: [ 1, 2, 3, 4 ],
          quantityById: { 1: 1, 2: 2, 3: 2, 4: 5 }
        }

        expect(cart(state, { type: 'REMOVE_FROM_CART', productId: 4 })).toEqual({
          addedIds: [ 1, 2, 3],
          quantityById: { 1: 1, 2: 2, 3: 2 }
        })
      })

      it('calling function addedIds ', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 1 }
        }
        expect(getAddedIds(state)).toEqual([ 1, 2 ])
      })

      it('calling function getQuantity ', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 7 }
        }
        expect(getQuantity(state, 2)).toEqual(7)
      })

      it('calling function getQuantity with unknown ID ', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 7 }
        }
        expect(getQuantity(state, 3)).toEqual(0)
      })

    })
  })
})
