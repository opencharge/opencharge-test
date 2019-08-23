import React from 'react';
import { cn } from '@bem-react/classname';
// import { HeaderUser } from './User/Header-User';
// import { HeaderAdd } from './Add/Header-Add';
// import { HeaderLogo } from './Logo/Header-Logo';
import "./History.css";
import defaultData from './data.js';
import '../BrandLogo/BrandLogo.css';

const cnHistory = cn('History');
const PtList = cn('PtList');
const Text = cn('Text');
const Decorator = cn('Decorator');

export const History = props =>
    <div className={cnHistory({ type: 'Desktop' }, [Decorator({ 'space-a': 'l' })])}>
        <div className={Text({ view: 'primary', size: '3xl', weight: 'semibold' }, [Decorator({ 'indent-b': 'l' })])}>
            История платежей
        </div>
        <div className={PtList({ view: 'default', border: 'all' })}>
            {
                defaultData.map((item, i) => {
                    return (
                        <div className='PtList-Item' key={i}>

                            <div className='time&date'>
                                <div className='Text Text_size_m Text_view_primary'>{item.date}</div>
                                <div className='Text Text_size_s Text_view_secondary'>{item.time}</div>
                            </div>

                            <div className='PtIconPlus PtIconPlus_vertical-align_center'>
                                <div className='PtIconPlus-Icon'>
                                    <div className={`BrandLogo BrandLogo_name_${item.brandLogo} BrandLogo_size_m`}></div>
                                </div>
                                <div className='PtIconPlus-Block Decorator Decorator_indent-l_m'>
                                    <div className='Text Text_size_m Text_view_primary'>{item.transactionName}</div>
                                </div>
                            </div>

                            <div className={`Text Text_size_m Text_view_${(item.addMoney) ? 'success' : 'primary'}`}>
                                { (item.addMoney) ? '+' : '-' }
                                { (item.currency === 'roubles') ? 'P' : ''}
                                {item.qty}
                            </div>

                        </div>
                    )
                })
            }
        </div>
    </div>

export default History