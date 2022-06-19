import React, { Component } from 'react'
import NewsItem from './NewsItem'



const articles = [
    {
        "source": { "id": null, "name": "Golosameriki.com" },
        "author": "golosameriki@voanews.com (Reuters)",
        "title": "Маск и Шольц открыли Гигафабрику Tesla",
        "description": "Первый автомобиль сошел с конвейера Гигафабрики Tesla в Германии. Это произошло через два года после того, как было объявлено о решении компании начать выпуск автомобилей в Европе.\n\nВ церемонии приняли участие основатель Tesla - Илон Маск и канцлер Германии О…",
        "url": "https://www.golosameriki.com/a/6497129.html",
        "urlToImage": "https://gdb.voanews.com/093e0000-0a00-0242-5816-08da0c1d9df7_w1200_r1.jpg",
        "publishedAt": "2022-03-23T01:25:35Z",
        "content": "Tesla . , .\r\n Tesla - .\r\n , 8 , .\r\nTesla , 3,5 , 12 . 500 , .\r\n Model Y, 70,5 . , Tesla ."
    },
    {
        "source": { "id": null, "name": "Overclockers.ru" },
        "author": "amv212",
        "title": "Ютубер выложил в сеть вирусный полёт Tesla на улицах Лос-Анджелеса",
        "description": "На вирусном видео, опубликованном в Youtube, видно, как Tesla Model S взмывает в воздух и разбивается. Сотрудники полиции Лос-Анджелеса пытаются установить личность незадачливого пилота.",
        "url": "https://overclockers.ru/blog/amv212/show/64751/yutuber-vylozhil-v-set-virusnyj-polet-tesla-na-ulicah-los-andzhelesa",
        "urlToImage": "https://overclockers.ru/st/legacy/blog/396911/295912_O.jpg",
        "publishedAt": "2022-03-23T00:40:41Z",
        "content": "20 YouTuber \" \", , - \"\" - Tesla.   , Tesla S-BLM 2018 -.\r\nTesla Model S . Alex Choi/YouTube\r\n - (LAPD) Youtube .\r\n, Tesla S-BLM 50 (15 ). , , , . Tesla , Subaru .   20 2022 - -, -, . , .\r\n , , - , 10… [+244 chars]"
    },
    {
        "source": { "id": null, "name": "Tech Times" },
        "author": "Sophie Webster",
        "title": "US Regulators Want Elon Musk's Tweets Monitored, Threatens to File a Subpoena",
        "description": "Musk tweeting about Tesla has affected the automaker's stocks and shareholder value.",
        "url": "https://www.techtimes.com/articles/273358/20220322/regulators-want-elon-musks-tweets-monitored-threatens-file-subpoena.htm",
        "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/402397/elon-musk.jpg",
        "publishedAt": "2022-03-23T00:40:00Z",
        "content": "On Mar. 22, the securities regulators of the United States said that they have the authority to subpoena Tesla's CEO and billionaire Elon Musk about his tweets.\r\nThe regulators urged a federal judge … [+3860 chars]"
    },
    {
        "source": { "id": null, "name": "Technews.tw" },
        "author": "MoneyDJ",
        "title": "鮑爾拿出魄力抗通膨，特斯拉、中概股狂飆",
        "description": "聯準會（Fed）主席鮑爾（Jerome Powell）拿出魄力，打算積極升息抗通膨，這促使科技及其他大型成長股反彈、金融類股同步走揚，美國四大指數 22 日全面收高。\r\n\r\n\r\n\r\n道瓊工業平均指數3月22日終場上漲0.74%（254.47點）、收34,807.46點。那斯達克指數上漲1.95%（2...",
        "url": "https://finance.technews.tw/2022/03/23/us-stock-march-22/",
        "urlToImage": "https://img.technews.tw/wp-content/uploads/2022/01/04154824/shutterstock_1165569814.jpg",
        "publishedAt": "2022-03-23T00:38:34Z",
        "content": "FedJerome Powell 22 \r\n3220.74%254.4734,807.461.95%270.3614,108.825001.13%50.4344,511.610.66%22.623,445.85\r\nTesla Inc.Grünheide7.91%993.98120\r\nApple Inc.Microsoft Corp.Amazon.com Inc.GoogleAlphabet In… [+459 chars]"
    },
    {
        "source": { "id": null, "name": "24/7 Wall St." },
        "author": "247chrislange",
        "title": "Cathie Wood’s ARK Invest Trades for 3/22",
        "description": "Here is a look at what the ARK Invest exchange-traded funds bought and sold on March 22, 2022.",
        "url": "https://247wallst.com/investing/2022/03/22/cathie-woods-ark-invest-trades-for-3-22/",
        "urlToImage": "https://247wallst.com/wp-content/uploads/2018/12/imageForEntry1-7.jpg",
        "publishedAt": "2022-03-23T00:20:27Z",
        "content": "Markets gained momentum on Tuesday with the Nasdaq almost hitting a 2% gain on the day. ARK Invest funds each saw sizable gains across the board, despite practically no trading action in the actual E… [+4062 chars]"
    }
]


export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: articles,
            loading: false
        };
    }

 async componentDidMount(){
    let Url='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=291b73107b0447ddbc16e02f2215a734';
   let  data =await fetch(Url)
   let parsedData= await data.json()
   console.log(parsedData);
   this.setState({articles: parsedData.articles})
}


    render() {
        return (
            <div className='container '>
                < div className="row" >

                    {this.state.articles.map((el) => {
                        return (
                           el.urlToImage &&  <div className="col-md-4" key={el.url}>
                                <NewsItem  title={el.title?el.title.slice(0, 35):""} description={el.description?el.description.slice(0,84):""} imgUrl={el.urlToImage} newsUrl={el.url} />
                            </div>
                        )

                    })}



                </div>


            </div >
        )
    }
}

export default News