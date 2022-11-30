
const baseUrl = 'https://api.blockchair.com/bitcoin/stats';
var blocks
var difficulty


function getElement(element) {
    return document.querySelector(element);
}

var init = {
    method: 'GET',
    blocos: 'blocks'
}

function consultAPI() {

    fetch(baseUrl, init)
        .then(response => response.json())
        .then(result => {

            blocksTotal = result.data.blocks
            difficultyHashRate = result.data.difficulty
            allBlocks_24 = result.data.blocks_24h
            allTransactions_24h = result.data.transactions_24h
            thePriceUsd = result.data.market_price_usd
            circulationBtc = result.data.circulation
            inflation24h = result.data.inflation_24h

            callback()
        })

}
setInterval(consultAPI, 9000)


consultAPI()


