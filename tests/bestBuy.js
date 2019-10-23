var page
module.exports = {
    beforeEach: browser => {
        page = browser.page.objects()
        page.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Search': browser => {
        page
            .itemSearch1()
            .itemSearch2()
            .itemSearch3()
            .login()
            .getTotal()
    },

    
}