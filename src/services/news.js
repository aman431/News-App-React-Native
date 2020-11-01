import { article_url,_api_key,country_code,category } from '../config/rest_config';

export async function getArticles(){
    try{
        let articles = await fetch(`${article_url}?country=${country_code}&category=${category}`, {
            headers:{
                'X-API-KEY': _api_key
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