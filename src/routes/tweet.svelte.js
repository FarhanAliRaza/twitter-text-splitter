


export class Tweet {
    text = $state("")
    totalCount = $state(0)
    tweets = $state([])
    limit = 280

    constructor(text) {
        this.text = text
        this.createTweets()
    }
    clear() {
        this.text = ""
        this.tweets = []
        this.totalCount = 0
    }
    getTotalCount() {
        this.totalCount = this.text.split("").length
    }

    createText() {
        let text = ""
        for (let index = 0; index < this.tweets.length; index++) {
            const element = this.tweets[index];
            text = `${text} ${element.text}`
        }
        this.text = text
    }

    isLastElementSpace(arr) {
        return arr[arr.length - 1] == " "
    }
    createNewTweet(text) {

        this.tweets.push({
            id: this.tweets.length,
            text: text.trim(),
            is_copied: false
        })
    }

    procText(text) {
        const f_arr = text.split("").slice(0, this.limit)
        let remainingText = ""
        if (!this.isLastElementSpace(f_arr)) {
            //word is broken at the last of the array
            console.log("space at last")
            const f_text = f_arr.join("")
            const f_arr_sp = f_text.split(" ")
            f_arr_sp.pop()
            const extracted = f_arr_sp.join(" ")
            this.createNewTweet(extracted)
            remainingText = text.replace(extracted, "")
            // console.log(s_arr)
        } else {
            console.log("NO SPACE LAST")
            const extracted = f_arr.join("")
            this.createNewTweet(extracted)
            remainingText = text.replace(extracted, "")
        }
        return remainingText
    }
    createTweets() {
        //splitting
        this.getTotalCount()
        if (this.totalCount == 0) {
            this.clear()
            return
        };
        this.tweets = []
        //if we split by text it will cut words so we take that into account 
        let remainingText = this.text + " ";
        while (remainingText.length != 0) {
            remainingText = this.procText(remainingText)
        }
    }
}


