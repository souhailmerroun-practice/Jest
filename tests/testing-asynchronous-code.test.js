function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 300);
    });
}

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter')
    })
})