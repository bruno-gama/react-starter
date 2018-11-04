// @flow strict
import React from 'react'

type Props = {
  data: ?{ content: string },
}

const Dude = ({ data }: Props) => <div>{data && <p>{data.content}</p>}</div>

export default Dude
