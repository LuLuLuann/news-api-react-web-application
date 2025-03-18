import { useState, useEffect } from "react";
import axios from "axios";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const apiKey = import.meta.env.VITE_NEWSAPI_ORG_API_KEY

//top headlines in USA
// const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

// all news about apple from 3-18-25 (ex of keyword search)
// const apiUrl = `https://newsapi.org/v2/everything?q=Apple&from=2025-03-18&sortBy=popularity&apiKey=${apiKey}`

// top headlines only from bbc
// const apiUrl =`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`

// function News() {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get(apiUrl)
//       .then((response) => {
//         setNews(response.data.articles); // NewsAPI returns an 'articles' array
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   // Function to post a selected article
//   const handleSaveArticle = async (article) => {
//     try {
//       const response = await axios.post("https://your-backend-api.com/save", article);
//       alert("Article saved successfully!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error saving article:", error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Latest News</h2>
//       <ul>
//         {news.slice(0, 5).map((article, index) => (
//           <li key={index}>
//             <h3>{article.title}</h3>
//             <p>{article.description}</p>
//             <button onClick={() => handleSaveArticle(article)}>Save Article</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default News;

function News() {

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
  
  
    //Make api call to news api
    async function getNews() {
      //Set loading boolean to true so that we know to show loading text
      setLoading(true);
  
      //Make news api call using axios
      const resp = await axios.get(`https://newsapi.org/v2/everything?q=stocks+finance&apiKey=${apiKey}&pageSize=10`);
      setNewsData(resp.data.articles);
  
      //Set loading boolean to false so that we know to show news articles
      setLoading(false);
    }
  
    useEffect(() => {
      getNews();
    }, []);
  
  
  
    return (
      <div className="App" style={styles}>
        <header className="App-header">
          {loading ? "Loading..." : <Container>
            
            {newsData.map((newsData, index) =>
              <Row className="">
                <Col xs={12} className="mt-5 w-500" key={index}>
                  <a target="_blank" href={newsData.url}>
                    <Card >
                      <Card.Title className="my-3">  {newsData.title}</Card.Title>
                      <Card.Img src={newsData.urlToImage} />
                      <Card.Body>
  
                        <Card.Text>
                          {newsData.description}
                        </Card.Text>
                        <hr />
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              </Row>
            )}

          </Container>
          }
        </header>
      </div>
    );
  }
  

  const styles = {
    display: "flex",
    justifyContent: "space-around", 
    fontSize: "20px",
    backgroundColor: "rgb(233, 110, 198)",
    padding: "10px 100px",
    textAlign: "center",
    
}


// border: "5px dotted black"

  export default News;