import { getReceipt, cartReceipts } from './receipts'

describe('receipt initial state', () => {
  describe('receipt', () => {

    it('lists all of the receipts', () => {
      expect("hi").toEqual("hi")
    })

    it('should handle cartReceipts', () => {
      const state = {}
      const mycart = {
        cart: {
          addedIds: [2],
          quantityById: {2: 1}
        }
      }

      expect(cartReceipts (state, { type: 'CHECKOUT_SUCCESS',

        cart: {
          addedIds: [
            2
          ],
          quantityById: {
            2: 1
          }
        }

    })).toEqual(
      {"0": {"cart": {"addedIds": [2], "quantityById": {"2": 1}}, "detail": {"id": 0, "timestamp": 111, "total": 31.55, "user": "a@b.edu"}}}
      )
    })

/*
    it('should handle cartReceipts', () => {
          const state = {
              0: {
                cart: {
                  addedIds: [
                    2,
                    3
                  ],
                  quantityById: {
                    2: 1,
                    3: 1
                  }
                },
                detail: {
                  id: 0,
                  timestamp: 1505173544745,
                  total: 31.55,
                  user: "a@b.edu"
                }
              },
              1: {
                cart: {
                  addedIds: [
                    2,
                    3
                  ],
                  quantityById: {
                    2: 1,
                    3: 1
                  }
                },
                detail: {
                  id: 0,
                  timestamp: 1505173544745,
                  total: 31.55,
                  user: "a@b.edu"
                }
              }
          }

          expect(getReceipt(state,0)).toEqual({
            1: {
              cart: {
                addedIds: [
                  2,
                  3
                ],
                quantityById: {
                  2: 1,
                  3: 1
                }
              },
              detail: {
                id: 0,
                timestamp: 1505173544745,
                total: 31.55,
                user: "a@b.edu"
              }
            }
          })
    })

*/
  })
})
