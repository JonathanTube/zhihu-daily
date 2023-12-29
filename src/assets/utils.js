function getTime() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1 // months are zero-based
  const day = now.getDate()
  return `${year}${month}${day}`
}

export { getTime }
