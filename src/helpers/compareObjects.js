import { pipe, map, toPairs, filter } from 'ramda'

export const newValues = (a, b) =>
  pipe(
    toPairs,
    map(
      ([key, value]) =>
        !b.hasOwnProperty(key) || b[key] !== value ? key : null
    ),
    filter(value => value !== null)
  )(a)
