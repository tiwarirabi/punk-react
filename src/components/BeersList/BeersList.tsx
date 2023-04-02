import React from 'react';
import { IBeer } from 'types';
import Beer from 'components/Beer/Beer';

import styles from './BeersList.module.scss';

interface IProps { 
    beers: IBeer[],
}

const BeersList = (props: IProps) => {
    const { beers } = props;

    if (!beers || !beers.length) return null;
    
    return (<section className={`${styles.ListContainer} ${
        beers.length === 1 ? styles.SingleInListContainer : ""
      }`}>
        {beers.map((beer, index) => (
            <Beer beer={beer} key={index} />
        ))}
    </section>);
}

export default BeersList;