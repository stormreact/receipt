import receipts from './receipts'
import reducer, * as products from './products'

describe('receipt initial state', () => {
  describe('receipt', () => {
    const initialState = {
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
  })
})

describe('reducers', () => {
  describe('receipts', () => {
    let state

    describe('when receipts are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_RECEIPTS',

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


        })
      })

/*
      it('lists all of the receipts', () => {
        expect(receipts.getReceipts(state)).toEqual([
          {
            id: 1,
            title: 'Product 1',
            inventory: 2
          }, {
            id: 2,
            title: 'Product 2',
            inventory: 1
          }
        ])
      })
*/

    })
  })
})
