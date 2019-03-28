import { getHTML, getTwitterFollowers } from './lib/scraper';


async function go() {
    const url = 'https://twitter.com/Bolaji___'
    const html = await getHTML(url);
    const twCount = await getTwitterFollowers(html);
    console.log(`You have ${twCount} followers.`)
}

go();
