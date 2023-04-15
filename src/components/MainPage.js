import React, { useEffect, useState } from 'react';
//Api Data
import getAllData from '../services/api.js';
//Style
import styles from './MainPage.module.css';
//Components
import Currency from './Currency.js';
//Icons
import Loader from './media/9gdqrEF1Df.gif';

const MainPage = () => {

   const [allCoins , setAllCoins] = useState([])
   const [searchKey , setSearchKey] = useState('');

   useEffect(() => {
      const fetchApi = async () => {
         const result = await getAllData();
         setAllCoins(result)
         console.log(allCoins);
      }

      fetchApi()
   })

   const searchHandler = (event) => {
      setSearchKey(event.target.value)
   }
   
   const searchResult = allCoins.filter(item => item.name.toLowerCase().includes(searchKey.toLowerCase())) 

   return (
      <>
         <div className={styles.container}>
            <input type='text' placeholder='Search' value={searchKey} onChange={searchHandler}/>
            <div className={styles.coinsListContainer}>
               <div className={styles.coinsListHeader}>
                  <h3></h3>
                  <h3>NAME</h3>
                  <h3>PRICE</h3>
                  <h3>MARKET CAP</h3>
                  <h3>VOLUME</h3>
                  <h3>CHANGE (24H)</h3>
               </div>
               <div className={styles.coinsList}>
                  {
                     allCoins.length ? searchResult.map(currency => <Currency key={currency.id} image={currency.image} symbol={currency.symbol} name={currency.name} price={currency.current_price} marketCap={currency.market_cap} totalVolume={currency.total_volume} totalSupply={currency.total_supply} priceChange24h={currency.price_change_percentage_24h}/> ) :
                     <img src={Loader}/>
                  }
               </div>
            </div>
         </div> 
      </>
   );
};

export default MainPage;