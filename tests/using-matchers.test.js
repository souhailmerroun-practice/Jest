test('object assignment', () => {
    const data = {one: 1}
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
})

function compileAndroidCode() {
    throw new Error('this is an error')
}

test('error goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow(Error)
})