import { episodes } from "./obj"

export const fetchAll = () => new Promise((resolve) => {
  window.setTimeout(() => {
    resolve(episodes)
  }, 100)
})

export default {fetchAll}