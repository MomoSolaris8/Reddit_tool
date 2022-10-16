
export class Article{
    title: string;
    link: string;
    votes: number;
    // votes ?: if we want to give it a number they will if not we want
    // default it to a value to another value like 0,  are got to add
    // a question mark to the end of the variable name
    constructor(title: string, link: string, votes?: number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(){
        this.votes += 1;

    }
    voteDown(){
        this.votes -= 1;
    }

}