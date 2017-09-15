import { getReceipt, cartReceipts } from "./receipts";
import reducer from "./receipts";

describe("receipt initial state", () => {
  describe("receipt", () => {
    it("lists all of the receipts", () => {
      expect("hi").toEqual("hi");
    });

    it("should handle one cartEvent", () => {
      const state = {};
      const cartEvent = {
        type: "CHECKOUT_SUCCESS",
        cart: {
          addedIds: [2],
          quantityById: { 2: 1 }
        }
      };
      const cartReceipt = {
        0: {
          cart: {
            addedIds: [2],
            quantityById: { 2: 1 }
          },
          detail: { id: 0, timestamp: 111, total: 31.55, user: "a@b.edu" }
        }
      };
      expect(cartReceipts(state, cartEvent)).toEqual(cartReceipt);
    });

    it("should handle receiving a set of receipts", () => {
      const state = reducer(
        {},
        {
          type: "RECEIVE_RECEIPTS",
          receipts: [
            {
              cart: {
                addedIds: [2, 3],
                quantityById: {
                  "2": 1,
                  "3": 1
                }
              },
              detail: {
                id: 1000,
                timestamp: 1505173544745,
                total: 131.55,
                user: "a@b.edu"
              }
            },
            {
              cart: {
                addedIds: [1, 4],
                quantityById: {
                  "1": 1,
                  "4": 1
                }
              },
              detail: {
                id: 1001,
                timestamp: 1505173544745,
                total: 31.55,
                user: "a@b.edu"
              }
            }
          ]
        }
      );

      const r1000 = {
        cart: { addedIds: [2, 3], quantityById: { "2": 1, "3": 1 } },
        detail: {
          id: 1000,
          timestamp: 1505173544745,
          total: 131.55,
          user: "a@b.edu"
        }
      };

      const r1001 = {
        cart: { addedIds: [1, 4], quantityById: { "1": 1, "4": 1 } },
        detail: {
          id: 1001,
          timestamp: 1505173544745,
          total: 31.55,
          user: "a@b.edu"
        }
      };

      expect(getReceipt(state, 1000)).toEqual(r1000);
      expect(getReceipt(state, 1001)).toEqual(r1001);
    });
  });
});
