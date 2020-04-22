class Storage {
  static set(key, value) {
    if (!value) return
    return localStorage.setItem(key, JSON.stringify(value))
  }

  static get(key) {
    if (!key) return
    const item = localStorage.getItem(key)
    if (!item) return
    return JSON.parse(item)
  }

  static remove(key) {
    if (!key) return
    return localStorage.removeItem(key)
  }

  static removeAll() {
    return localStorage.clear()
  }
}

export default Storage
