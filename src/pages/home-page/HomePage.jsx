import React from "react";
import { GameItem } from "../../components/gameItem/GameItem";
import style from './style.module.css'

const GAMES = [ 
    { 
        image: '/game-covers/gameOfTheYear.png', 
        title: 'Forza Horizon 5', 
        genres: ['Гонки', 'Симулятор', 'Открытый мир'], 
        price: 2343, 
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw', 
        id: 1, 
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!", 
    }, 
    { 
        image: '/game-covers/gameOfTheYear.png', 
        title: 'Battlefield 2042', 
        genres: ['Экшен', 'Шутер', 'Война'], 
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E', 
        price: 2433, 
        id: 2, 
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.' 
    }, 
    { 
        image: '/game-covers/gameOfTheYear.png', 
        title: 'Life is Strange True Colors', 
        genres: ['Глубокий сюжет', 'Протагонистка'], 
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M', 
        price: 3021, 
        id: 3, 
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.' 
    }
]

const gameItems = GAMES.map(game => <GameItem gameData = {game} key = {game.id}/>)

export const HomePage = () => {
    return ( 
    <div className={style.homePage}>
        {gameItems}
    </div> 
    );
}
