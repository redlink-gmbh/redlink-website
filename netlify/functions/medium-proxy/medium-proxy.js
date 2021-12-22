let Parser = require('rss-parser')
let parser = new Parser()

const handler = async (event) => {
  try {
    let feed = await parser.Parser.parseURL('https://medium.com/feed/@redlink.at');
    console.log(feed);
    console.log(feed.title);
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
    return {
      statusCode: 200,
      body: JSON.stringify(feed),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
