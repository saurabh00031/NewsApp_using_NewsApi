
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles=[
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },

        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },

       
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "'Simeone has totally transformed Atletico'",
            "description": "As Diego Simeone celebrates 10 years in charge of Atletico Madrid, Spanish football writer Andy West looks at his impact.",
            "url": "http://www.bbc.co.uk/sport/football/59742905",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5C78/production/_122327632_diego.png",
            "publishedAt": "2021-12-23T09:37:27.3046616Z",
            "content": "'The best manager in the world?' Why Simeone and Atletico are the perfect fit\r\nTen years ago on Thursday, Atletico Madrid took a gamble by appointing one of their former players as manager. \r\nIt was … [+5197 chars]"
        },

        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Tony Evans",
            "title": "Football on the front line in the Covid culture war",
            "description": "The sport was always going to be a battleground in the philosophical conflict that is dividing the country, writes Tony Evans",
            "url": "http://www.independent.co.uk/sport/football/covid-jurgen-klopp-liverpool-le-tissier-b1981230.html",
            "urlToImage": "https://static.independent.co.uk/2021/12/23/08/newFile-6.jpg?width=1200&auto=webp&quality=75",
            "publishedAt": "2021-12-23T09:34:04Z",
            "content": "The tweet is as stupid as it is jarring. I am a broken man, it said. Juergen (sic) Klopp has killed my love LFC youre dead to me.\r\nThe Twitter account in question has as its profile picture an illust… [+9076 chars]"
        },

        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": null,
            "title": "Football rumours: Newcastle enter race for signature of Tottenham’s Joe Rodon",
            "description": "The Telegraph and The Times report that Newcastle ⁠are targeting Tottenham and Wales centre-back Joe Rodon — already watched closely by Brighton, Watford and Leeds ⁠— as part of an effort to strengthen their defence. The Telegraph writes Magpies manager Eddie…",
            "url": "https://www.fourfourtwo.com/news/football-rumours-newcastle-enter-race-for-signature-of-tottenhams-joe-rodon-1640245038000",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/Tta9vsUALrG73WUDdvsxZ5-1200-80.jpg",
            "publishedAt": "2021-12-23T07:37:18Z",
            "content": "What the papers say\r\nThe Telegraph and The Times report that Newcastle ⁠are targeting Tottenham and Wales centre-back Joe Rodon — already watched closely by Brighton, Watford and Leeds ⁠— as part of … [+1593 chars]"
        },

        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": null,
            "title": "Aberdeen chair calls on Nicola Sturgeon to let more fans into Boxing Day matches",
            "description": "Aberdeen chairman Dave Cormack appealed directly to Nicola Sturgeon to allow fans into Boxing Day matches after the Scottish Professional Football League (SPFL) partially brought forward the winter break.",
            "url": "https://www.fourfourtwo.com/news/aberdeen-chair-calls-on-nicola-sturgeon-to-let-more-fans-into-boxing-day-matches-1640233813000",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/4vVKFxNHaRbnfBb2LRXBbH-1200-80.jpg",
            "publishedAt": "2021-12-23T04:30:13Z",
            "content": "Aberdeen chairman Dave Cormack appealed directly to Nicola Sturgeon to allow fans into Boxing Day matches after the Scottish Professional Football League (SPFL) partially brought forward the winter b… [+2649 chars]"
        },

        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": null,
            "title": "'Thursday Night Football' preview: What to watch for in 49ers-Titans",
            "description": "NFL.com's Chase Goodbread breaks down four things to watch for when the San Francisco 49ers visit the Tennessee Titans in a TNF matchup full of playoff implications.",
            "url": "https://www.nfl.com/news/thursday-night-football-preview-what-to-watch-for-in-49ers-titans",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/vfic0p26wpzr81beouob",
            "publishedAt": "2021-12-23T04:07:24.3240899Z",
            "content": "With three weeks left in the NFL season, its come to this for the Tennessee Titans and San Francisco 49ers: the Titans (9-5) are trying to shake a tail (the 8-6 Colts) in the AFC, while in the NFC, t… [+3329 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "Meet Jared Folks, college football's first eight-year athlete",
            "description": "East Tennessee State linebacker Jared Folks' story is a tale of perseverance and personal growth, Charlotte Wilder writes.",
            "url": "http://www.foxsports.com/stories/college-football/meet-jared-folks-college-footballs-first-eight-year-athlete",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/12/1408/814/12.20.21_Jared-Folks-Feature_16x9.jpg?ve=1&tl=1",
            "publishedAt": "2021-12-23T01:08:36Z",
            "content": "By Charlotte WilderFOX Sports Columnist\r\nTheres a scene in the movie \"Tommy Boy\" in which Richard (David Spade) is tasked with picking up the delinquent graduate Tommy (played by Chris Farley, of cou… [+16917 chars]"
        },

        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": null,
            "title": "NFL Fantasy Football Podcast: Week 16 Fantasy Previews (aka Playoffs: The Sequel)",
            "description": "Marcas Grant and Michael F. Florio are back for a new edition of the NFL Fantasy Football Podcast to preview the Week 16 fantasy slate.",
            "url": "https://www.nfl.com/news/nfl-fantasy-football-podcast-week-16-fantasy-previews-aka-playoffs-the-sequel",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/zklixwwajfw7kodof0pq",
            "publishedAt": "2021-12-23T01:07:24.1812888Z",
            "content": "Marcas Grant and Michael F. Florio are back for a new edition of the NFL Fantasy Football Podcast to preview every game on the Week 16 slate! First, the hosts react to the news: Tampa Bay Buccaneers … [+707 chars]"
        },

        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Jenna LaineESPN Staff Writer ",
            "title": "Le'Veon Bell says he mulled retiring to pursue boxing before Tampa Bay Buccaneers called",
            "description": "Le'Veon Bell said Wednesday he nearly retired to take up boxing after going six weeks without football after the Ravens cut him and the Buccaneers were the only team that made him want to play again.",
            "url": "http://espn.go.com/nfl/story/_/id/32924254/leveon-bell-mulled-retiring-pursue-boxing-tampa-bay-buccaneers-called",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1222%2Fr954358_1296x729_16%2D9.jpg",
            "publishedAt": "2021-12-22T20:13:00Z",
            "content": "TAMPA, Fla. -- Veteran running back Le'Veon Bell, who practiced with his new Tampa Bay Buccaneers teammates for the first time Wednesday, said he seriously contemplated retirement after going six wee… [+5045 chars]"
        },

        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Heather DinichESPN Senior Writer ",
            "title": "College Football Playoff champion can be crowned via COVID-related forfeit, new policy states",
            "description": "The College Football Playoff committee has issued a new policy that allows a team to advance to the national championship - and ultimately win it - if opponents have to forfeit, according to its updated set of COVID-19 policies.",
            "url": "http://espn.go.com/college-football/story/_/id/32924158/college-football-playoff-champion-crowned-via-covid-related-forfeit-says-new-policy",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1130%2Fr944683_1296x729_16%2D9.jpg",
            "publishedAt": "2021-12-22T18:56:00Z",
            "content": "A new College Football Playoff policy written this week in response to the surging omicron virus allows for a team to advance to the national championship - and ultimately win it - by its opponents h… [+3882 chars]"
        },

        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        },


{
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "China locks down city of 13 million in bid to curb COVID outbreaks before Beijing Winter Olympics",
            "description": "The restrictions in Xi'an come just weeks before the Winter Olympics and are some of the harshest China has imposed since it locked down Wuhan after the coronavirus was first detected there in 2019.",
            "url": "https://www.cbsnews.com/news/china-covid-lockdown-xian-city-13-million-people-coronavirus/",
            "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2021/12/23/70ebdd53-f78d-4f24-8849-9ba1a080eb96/thumbnail/1200x630/70eea7f91161282afe0fcfadcf61ee56/china-covid-1237391882.jpg",
            "publishedAt": "2021-12-23T12:15:56+00:00",
            "content": "Beijing — China is redoubling efforts to control new virus outbreaks with a lockdown of the 13 million residents of the northern city of Xi'an following a spike in coronavirus cases. The measure come… [+2824 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": null,
            "title": "China puts city of 13 million in lockdown ahead of Olympics",
            "description": "BEIJING (AP) — China plunged a city of 13 million people into lockdown on Thursday to stamp out an increase in coronavirus infections, as the country doubles down on its “zero tolerance” policy just weeks before it is set to host the Winter Olympics.",
            "url": "https://apnews.com/11ccda99a03066a686315e7fbeb59586",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/5543bb48f547435c9ebe528b0c91840d/3000.jpeg",
            "publishedAt": "2021-12-23T06:40:01Z",
            "content": "BEIJING (AP) — China plunged a city of 13 million people into lockdown on Thursday to stamp out an increase in coronavirus infections, as the country doubles down on its “zero tolerance” policy just … [+3437 chars]"
        },
        {
            "source": {
                "id": "google-news-uk",
                "name": "Google News (UK)"
            },
            "author": "Guardian staff reporter",
            "title": "China locks down 13 million people in Xi’an after detecting 127 Covid cases",
            "description": "Snap lockdown, which prompted panic in the city, comes little over a month before Beijing is set to host the Winter Olympics",
            "url": "https://amp.theguardian.com/world/2021/dec/23/china-locks-down-13-million-people-in-xian-after-detecting-127-covid-cases",
            "urlToImage": "https://i.guim.co.uk/img/media/1552ccf2f2807e5aee107c1209f10b0c913e17a4/0_76_6000_3601/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7ebcf16d059e4a8709c26ae8356d8181",
            "publishedAt": "2021-12-23T04:56:24+00:00",
            "content": "Up to 13 million people have been placed into lockdown in the city of Xian in China, as authorities move to clamp down on the community spread of Covid-19 after 127 infections were found in a second … [+2840 chars]"
        },
        {
            "source": {
                "id": "nhl-news",
                "name": "NHL News"
            },
            "author": "Nicholas J. Cotsonika",
            "title": "NHL decision to not go to Olympics based on COVID-19 spread",
            "description": "NHL players will not participate in the 2022 Beijing Olympics for one reason: COVID-19.",
            "url": "https://www.nhl.com/news/nhl-decision-to-not-go-to-olympics-based-on-coronavirus-spread/c-329207292",
            "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/329207800/1024x576/cut.jpg",
            "publishedAt": "2021-12-22T15:01:43Z",
            "content": "NHL players will not participate in the 2022 Beijing Olympics for one reason: COVID-19.The NHL's announcement Wednesday had nothing to do with its longstanding issues with Olympic participation. The … [+5060 chars]"
        },
        {
            "source": {
                "id": "nhl-news",
                "name": "NHL News"
            },
            "author": "Tom Gulitti",
            "title": "NHL players will not participate in 2022 Beijing Olympics",
            "description": "NHL players will not participate in the 2022 Beijing Olympics, the League announced Wednesday.",
            "url": "https://www.nhl.com/news/nhl-players-will-not-participate-in-2022-beijing-olympics/c-329206756",
            "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/329206258/1024x576/cut.jpg",
            "publishedAt": "2021-12-22T15:00:00Z",
            "content": "NHL players will not participate in the 2022 Beijing Olympics, the League announced Wednesday.The NHL said the decision was made because the League's regular-season schedule has been disrupted as a r… [+6750 chars]"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "PTI",
            "title": "Tokyo Olympics | Deepika ninth in ranking round; Koreans top-two",
            "description": "The performances will determine the seedings for the elimination rounds.",
            "url": "https://www.thehindu.com/sport/tokyo-olympics-deepika-ninth-in-ranking-round-koreans-top-two/article35481902.ece",
            "urlToImage": "https://www.thehindu.com/sport/uvmmr0/article35481908.ece/ALTERNATES/LANDSCAPE_615/thnak1330128994jpg",
            "publishedAt": "2021-07-23T03:40:59Z",
            "content": "Star Indian archer Deepika Kumari finished ninth in the womens individual ranking round as the countrys Olympic campaign kickstarted at the Yumenoshima Park in Tokyo on Friday.\r\n The world No.1 finis… [+1117 chars]"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "In search of gold: On Tokyo Olympics",
            "description": "The Olympic Games remain the greatest sporting event for fans and athletes alike",
            "url": "https://www.thehindu.com/opinion/editorial/in-search-of-gold-the-hindu-editorial-on-tokyo-olympics-2021/article35478354.ece",
            "urlToImage": "https://www.thehindu.com/static/theme/default/base/img/og-image.jpg",
            "publishedAt": "2021-07-22T18:32:00Z",
            "content": "A medal can lose its lustre but the athletes sporting immortality is set in stone, such is the enduring allure of triumphs at the Olympics. Even a participant without any titles, is referred to as an… [+2521 chars]"
        }
      
        
    
      
    ]


    constructor(){
        super();
        console.log("constructor called from news component");
        this.state={
        
             articles : this.articles,
             loading:false

        }
    
    }

    //it is cyclic method

  async componentDidMount() {
     let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4122768b6ffc41beab3643e9c004e946" 
     
     let btj=document.getElementById('btx');
    
     let data= await fetch(url);
     let parseData=await data.json();
     console.log(data);
     console.log(parseData);
     this.setState({articles : parseData.articles});
    }
  

    

    render() {
        return (
            <>
            <div className="container mt-5 pb-5  pt-5">
               <h2 class="bg-info pb-2 pt-2"><i>this is news component here</i></h2> 
               <br/>

             
               <div className="row">
               {
                this.state.articles.map((element)=>{
                return   <div className="col-md-4 mt-4" key={element.url}>

                  <NewsItem  title={element.title?element.title:"..."} description={element.description?element.description:".........."}  imageUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
                  
 
               })}
            
               <button id="btx" class="btn btn-success">Next</button>
               </div>
        
               {/* <div className="row">
            
               <div className="col-md-4 mt-4">
               <NewsItem title="my-title" description="my-description" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
               </div>
               <div className="col-md-4 mt-4">
               <NewsItem title="my-title" description="my-description" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
               </div>
             
               <div className="col-md-4 mt-4">
               <NewsItem title="my-title" description="my-description" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
               </div>
              </div>
        */}
            </div>
            </>
        )
    }
}

export default News
