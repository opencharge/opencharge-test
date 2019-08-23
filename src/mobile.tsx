import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { registryContext } from '@bem-react/di';
import { registry } from './registry@mobile';

ReactDOM.render((
    <registryContext.Provider value={{ app: registry }}>
        <App />
    </registryContext.Provider>
), document.getElementById('root'));
