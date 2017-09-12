/**
 * Mocking client-server processing
 */
import _products from './products.json'
import _receipts from './receipts.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
  getInitialReceipts: (cb, timeout) => setTimeout(() => cb(_receipts), timeout || TIMEOUT),
}
