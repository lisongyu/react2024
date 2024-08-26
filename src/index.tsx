// 引入框架
import React,{StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

 // 引入文件
import './styles.css';

import App from './App.tsx';
const root=createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)


  