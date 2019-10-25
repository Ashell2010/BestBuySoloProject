

module.exports = {
    url: 'https://www.bestbuy.com',
    elements: {
        xPop: '[class="close"]',
        logo: '.logo',
        srchBar: '.search-input',
        srchBtn: { selector: '(//button[@type="submit"])[1]', locateStrategy: 'xpath' },
        resultsPage: '.search-title',
        itemSelect1: { selector: '//img[@src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5707/5707606_sd.jpg;maxHeight=200;maxWidth=300"]', locateStrategy: 'xpath' },
        addToCart: '[class="btn btn-primary btn-lg btn-block btn-leading-ficon add-to-cart-button"]',
        shopMore: '[class="close-modal-text"]',
        tvSize: '[data-reactid="28"]',
        moreOptions: { selector: '(//div[@class="detail-display-text"])[5]', locateStrategy: 'xpath' },
        tvSeries: { selector: '//button[@id="variaton-dropdown-Home_Video_Series"]', locateStrategy: 'xpath' },
        tvDropD: '[data-direction="next"]',
        tvSeriesPicker: '#variations-dropdown-item-Home_Video_Series-OLED_W9_Series',
        largeImage: { selector: '//button[@class="primary-button"]', locateStrategy: 'xpath' },
        nextImage: '[class="ficon-caret-right enabled"]',
        vidThumb: { selector: '(//button[@class="carousel-trigger"])[19]', locateStrategy: 'xpath' },
        playBtn: '[class="controller-button play-pause-button"]',
        fullScreen: '[class="controller-button fullScreen"]',
        closeWindow: '.c-close-icon',
        standPicker: { selector: '(//a[@href="/site/bdi-avion-entertainment-center-for-flat-panel-tvs-up-to-75-espresso/9543862.p?skuId=9543862"])[1]', locateStrategy: 'xpath' },
        added: '.success-text',
        checkOut: { selector: '//a[@href="https://www.bestbuy.com/cart"]', locateStrategy: 'xpath' },
        account: { selector: '//span[@class="flyBtn"]', locateStrategy: 'xpath' },
        signIn: { selector: '//button[@class="lam-signIn__button btn btn-secondary"]', locateStrategy: 'xpath' },
        emailInput: '[type="email"]',
        password: '[type="password"]',
        smallSignIn: { selector: '//button[@class="btn btn-secondary btn-lg btn-block btn-leading-ficon cia-form__controls__submit "]', locateStrategy: 'xpath' },
        cart: '.cart-label',
        gotIt1: { selector: '(//a[@class="cart-item__attach-link"])[1]', locateStrategy: 'xpath' },
        gotIt2: { selector: '(//a[@class="cart-item__attach-link"])[2]', locateStrategy: 'xpath' },
        finalPrice: '.listing-footer__pricing-value',

    },
    var: loginInfo = { email: 'DoITForTheAutomation@gmail.com', pass: 'Testaccount1234' },
    commands: [{
        scrollDownBy: function (pixels) {
            this
                .api.execute(`window.scrollBy(0, ${pixels})`)
            return this
        },
        scrollUpBy: function (pixels) {
            this
                .api.execute(`window.scrollBy(0, ${pixels})`)
            return this
        },
        //================================================================
        //*               | Selecting Speakers |
        //================================================================
        itemSearch1: function () {
            this
                .waitForElementVisible('@xPop')
                .click('@xPop')
                .waitForElementVisible('@logo')
                .setValue('@srchBar', 'Home Entertainment System')
                .pause(2000)
                .click('@srchBtn')
                .expect.element('@resultsPage').text.to.contain('home entertainment system')
            this
                .click('@itemSelect1')
                .scrollDownBy(350)
                .pause(2000)
                .saveScreenshot('./screenshots/purchasedItem1.png')
                .waitForElementVisible('@addToCart', 20000)
                .click('@addToCart')
                .expect.element('@added').text.to.contain('Item added to cart')
            this
                .waitForElementVisible('@shopMore')
                .click('@shopMore')
            return this
        },
        //================================================================
        //*                | Selecting a Tv |
        //================================================================
        itemSearch2: function () {
            this
                .scrollUpBy(-200)
                .click('@logo')
                .waitForElementVisible('@srchBar')
                .setValue('@srchBar', 'Tv')
                .pause(2000)
                .click('@srchBtn')
                .waitForElementVisible('@logo')
                .expect.element('@resultsPage').text.to.contain('tv')
            this
                .waitForElementVisible('@logo')
                .click('@tvSize')
                .click('@moreOptions')
                .waitForElementVisible('@tvSeries', 2000)
                .click('@tvSeries')
                .moveToElement('@tvSeriesPicker', 0, 0)
                .click('@tvSeriesPicker')
                .scrollDownBy(275)
                .saveScreenshot('./screenshots/purchasedItem2.png')
                .click('@largeImage')
                .click('@nextImage')
                .waitForElementVisible('@nextImage', 20000)
                .click('@nextImage')
                .waitForElementVisible('@nextImage', 20000)
                .click('@nextImage')
                .waitForElementVisible('@nextImage', 20000)
                .click('@vidThumb')
                .waitForElementVisible('@playBtn', 20000)
                .click('@playBtn')
                .pause(5000)
                .click('@nextImage')
                .waitForElementVisible('@playBtn', 20000)
                .click('@fullScreen')
                .waitForElementVisible('@fullScreen')
                .click('@fullScreen')
                .waitForElementVisible('@playBtn')
                .click('@playBtn')
                .pause(5000)
                .waitForElementVisible('@closeWindow', 20000)
                .click('@closeWindow')
                .waitForElementVisible('@addToCart', 20000)
                .moveToElement('@addToCart', 0, 0)
                .click('@addToCart')
                .waitForElementVisible('@shopMore', 20000)
                .expect.element('@added').text.to.contain('Item added to cart')
            this
                .click('@shopMore')
                .moveToElement('@logo', 0, 0)
                .click('@logo')

            return this
        },



        //================================================================
        //*               | Selecting Entertainment Center |
        //================================================================
        itemSearch3: function () {
            this
                .setValue('@srchBar', 'Entertainment Center')
                .pause(5000)
                .click('@srchBtn')
                .expect.element('@resultsPage').text.to.contain('entertainment center')
            this
                .moveToElement('@standPicker', 0, 0)
                .waitForElementVisible('@standPicker', 20000)
                .click('@standPicker')
                .scrollDownBy(100)
                .saveScreenshot('./screenshots/purchasedItem3.png')
                .waitForElementVisible('@addToCart', 20000)
                .click('@addToCart')
                .waitForElementVisible('@shopMore', 20000)
                .expect.element('@added').text.to.contain('Item added to cart')
            this
                .click('@shopMore')
                .moveToElement('@logo', 0, 0)
                .click('@logo')
            return this
        },
        //================================================================
        //*               | Log Into Account/ Check Cart|
        //================================================================
        login: function () {
            this
                .click('@account')
                .waitForElementVisible('@signIn')
                .click('@signIn')
                .waitForElementVisible('@emailInput')
                .setValue('@emailInput', loginInfo.email)
                .expect.element('@emailInput').to.have.value.which.equals(loginInfo.email)
            this
                .setValue('@password', loginInfo.pass)
                .expect.element('@password').to.have.value.which.equals(loginInfo.pass)
            this
                .click('@smallSignIn')
                .click('@cart')
                .click('@gotIt1')
                .click('@gotIt2')
            return this
        },
        //================================================================
        //*               | Calling for the Total Amount |
        //================================================================
        getTotal: function () {
            this
                .moveToElement('@finalPrice', 0, 0)
                .waitForElementVisible('@finalPrice')
                .saveScreenshot('./screenShots/totalAmount.png')
                .getText('@finalPrice', function (result) {
                    this
                    console.log(result.value)
                })
            return this
        }

    }]

}













































//| ____________________________________________________________________________________________________
//| ////////////////////////////////////////////////////////////////////////////////////////////////////|
//| ////////////////////////////////////////////////////////////////////////////////////////////////////|
//| ////////////////////////////////////////////////////////////////////////////////////////////////////|
//| ___________________________________________________________________________________________/////////|
//|      _____________________    _______      _______     _____________                       |////////|
//|     |hahahahahahahahahahah|  |hahahah|    |hahahah|   |hahahahahahah|                      |////////|
//|     |hahahahahahahahahhaha|  |hahahah|    |hahahah|   |hahah________|                      |////////|
//|     |______|hahahah|______|  |hahahah|____|hahahah|   |haha|____                           |////////|
//|            |hahahah|         |hahahahahahahahahaha|   |hahahahah|                          |////////|
//|            |hahahah|         |hahahahahahahahahaha|   |hahah____|                          |////////|
//|            |hahahah|         |hahahaha____hahahaha|   |haha|________                       |////////|
//|            |hahahah|         |hahahah|    |hahahha|   |hahahahahahah|                      |////////|
//|            |_______|         |_______|    |_______|   |_____________|                      |////////|
//|                                                                                            |////////|
//|                                                                                            |////////|
//|  _________________     ___________     ________      ________   ________________           |////////|
//| |/////////////////|   //////_\\\\\\   |////////\    /////////| |///////////////|           |////////|
//| |/////____________|  /////// \\\\\\\  |/////////\  //////////| |//////_________|           |////////|
//| |////|              ///////|_|\\\\\\\ |//////////\///////////| |/////|_____                |////////|
//| |////| ___________  |///////////////| |//////////////////////| |///////////|               |////////|
//| |////||///////////| |//////| |//////| |//////////////////////| |/////______|               |////////|
//| |////||______/////| |//////|_|//////| |//////////////////////| |////|                      |////////|
//| |////|_______|////| |//////| |//////| |////////_////_////////| |////|______________________|////////|
//| |/////////////////| |//////| |//////| |///////| \  / |///////| |////////////////////////////////////|
//| |_________________| |______| |______| |_______|  \/  |_______| |_____________________________________