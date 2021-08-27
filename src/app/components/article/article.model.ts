export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes: number) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  voteUp () : void  {
    this.votes += 1;
  }

  voteDown() : void {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts the domain from a url
  domain() : string | null {
    try {
      // eg http://foo.com/path/to/bar returns foo.com/path/to/bar
      return this.link.split('//')[1];
    } catch (err) {
      return null;
    }
  }
}

