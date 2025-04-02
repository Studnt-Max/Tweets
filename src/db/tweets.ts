class TweetService {
    private tweets: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    async getTweets(): Promise<number[]> {
        return [...this.tweets];
    }
}

export const tweetService = new TweetService();