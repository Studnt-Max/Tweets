import { tweetService } from "../db/tweets";

class TweetController {
    async getAllTweets(): Promise<number[]> {
        const allTweets = await tweetService.getTweets();

        return (allTweets as number[]).filter(n => n % 2 === 0);
    }
}

export default TweetController;