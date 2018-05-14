export function $(sel) {
  return document.querySelector(sel)
}

export function $$(sel) {
  return Array.from(document.querySelectorAll(sel))
}
