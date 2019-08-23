import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import PtListData_Default from  '../ComponentsData/PtListData_Default'
import './History.css';

const cn = withNaming({ e: '__', m: '_' });

class History extends Component {
    render() {
        return (
            {PtListData_Default.map(item =>
                <div
                    className={decorator({ 'space-r': 'l' })}
                    id={item.feature.id}
                />
            )}
        );
    }
}

export default History;