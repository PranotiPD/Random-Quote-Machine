import './quote.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {

    const [quotes, setQuotes] = useState({});
    const [quote, setQuote] = useState({});
    const colors = ['#FF6C22', '#164863', '#4F6F52', '#0C356A', '#CE5A67', '#706233', '#190482', '#B0578D', '#FF6969', '#7C81AD', '#D988B9', '#FF9B82','#9D44C0'];
    const [color, setColor] = useState('#164863');
  
    useEffect(() => {
      axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => {
          setQuotes(response.data.quotes);
          setQuote(response.data.quotes[Math.floor(Math.random() * 102)])
        })
        .catch(error => {
          console.error(error);
        });
    },[]);
  
    const handleClick = () => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)])
      setColor(colors[Math.floor(Math.random() * colors.length)])
    }

    return (
        <div className="quote-wrapper" style={{backgroundColor: color}} id="quote-box">
            <div className='quote' id="text">
                <p><i className='fa fa-quote-left'></i> {quote.quote}</p>
            </div>
            <div className='author' id="author">- {quote.author}</div>
            <div className='last-line-wrap'>
                <div className='fb-twitter-wrap'>
                    <a id="tweet-quote" title="Post this quote on tumblr!" target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Everything%20you%E2%80%99ve%20ever%20wanted%20is%20on%20the%20other%20side%20of%20fear.%22%20George%20Addair"><i className='fa fa-twitter icon'></i></a>
                    <a id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" rel="noreferrer"
                    href='https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DAristotle%26content%3DThere%2Bis%2Bonly%2Bone%2Bway%2Bto%2Bavoid%2Bcriticism%253A%2Bdo%2Bnothing%252C%2Bsay%2Bnothing%252C%2Band%2Bbe%2Bnothing.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button'><i className='fa fa-tumblr icon'></i></a>
                </div>
                <button id="new-quote" href="#" className='button' onClick={handleClick} >New quote</button>
            </div>
        </div>
    )
}

export default Quote;