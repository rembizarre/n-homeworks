import { CAR_JPEG, NFACTORIAL_PNG } from "../images"
import Tweet from "./Tweet"

export default function TweetsList () {
    const tweets = [
        {
            author: 'Puzzi',
            authorUsername: '@puzzi',
            img: CAR_JPEG,
            content: 'Have you heard the news? There will be no sweets in kindergarden from tomorrow 🙄',
            replies: 200,
            retweets: 1000,
            likes: 500

        },
        {
            author: 'nfactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_PNG,
            content: 'New Fullstack course starts today',
            replies: 1000,
            retweets: 4309,
            likes: 500

        },
        {
            author: 'nfactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_PNG,
            content: 'Black Friday: New iPhone with 50% price drop',
            replies: 1000,
            retweets: 4309,
            likes: 500

        },
        {
            author: 'nfactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_PNG,
            content: 'New Data Base Analytics course starts today',
            replies: 1000,
            retweets: 4309,
            likes: 500

        }
    ]
    return tweets.map((tweet, index)=><Tweet {...tweet} key={index}/>)
     
}