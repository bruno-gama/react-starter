// @flow strict

type fakeResourceResponse = {
  content: string,
}

type wrongResourceResponse = {
  wrong: string,
}

const get = (): Promise<fakeResourceResponse> =>
  Promise.resolve({ content: 'I am a resourceful dude' })

const getWrong = (): Promise<wrongResourceResponse> =>
  Promise.resolve({ wrong: 'I am a resourceful dude' })

export default { get, getWrong }
