import React from 'react';
//Styles
import styles from './Currency.module.css';

const Currency = (props) => {
   const {image,name,symbol,price,marketCap,totalVolume,totalSupply,priceChange24h} = props;
   return (
      <>
         <div className={styles.currency}>
            <div className={styles.currencyLogo}>
               <img src={image}/>
               <h3 className={styles.symbol}>{symbol.toUpperCase()}</h3>
            </div>
            <div>
               <p className={styles.name}>{name}</p>
            </div>
            <div>
               <p>$ {price}</p>
            </div>
            <div>
               <p>{marketCap.toLocaleString()}</p>
            </div>
            <div>
               <p>{totalVolume.toLocaleString()}</p>
            </div>
            <div  className={priceChange24h > 1 ? styles.increased : styles.decreased}>
               <p>{priceChange24h} %</p>
            </div>
         </div>
      </>
   );
};

export default Currency;