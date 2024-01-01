function getTime() {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, "0") // months are zero-based
  const day = now.getDate().toString().padStart(2, "0")
  return `${year}${month}${day}`
}

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

export { isPlainObject, getTime }
