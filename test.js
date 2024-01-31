describe('showSuggestions() tests', function() {
    beforeEach(function() {
        showSuggestions(['apple', 'banana', 'cherry'])
    })

    it('should append suggestions to list', function() {
        expect(suggestions.children.length).toEqual(3);
    })

    afterEach(function() {
        suggestions.innerHTML = '';
    })

})

describe('search() tests', function() {
    it('Should add the correct number of fruit to results based on string input in search(str)', function () {
        expect(search('ap').length).toEqual(7)
    });

    it('should not add any fruit to results when the str does not exist in any fruit', function() {
        expect(search('kji').length).toEqual(0);
    })
})


