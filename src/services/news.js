import { article_url,_api_key,country_code} from '../config/rest_config';

export async function getArticles(category='general'){
    try{
        //We start to fetcging a data from news url
        let articles = await fetch(`${article_url}?country=${country_code}&category=${category}`, {
            headers:{
                'X-API-KEY': _api_key // specifying a header with a api key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }

    catch(error){
        throw error;
    }
}