import { api_key, category_technology, category_general, country, article_url } from '../rest_config'

export async function getGeneralArticles() {
    try {
        let articless = await fetch(`${article_url}?country=${country}&category=${category_general}&apikey=${api_key}`)
        let result = await articless.json()
        return result.articles

    } catch (error) {

    }
}

export async function getTechnologyArticles() {
    try {
        let articless = await fetch(`${article_url}?country=${country}&category=${category_technology}&apikey=${api_key}`)
        let result = await articless.json()
        return result.articles
    } catch (error) {
    }
}

export async function getTopHeadlines() {
    try {
        let articless = await fetch(`${article_url}?country=us&apikey=${api_key}`)
        let result = await articless.json()
        return result.articles
    } catch (error) {
    }
}