import React from "react";
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import Hello from 'component/Hello/Hello';
import Getrouter from 'router/router';
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/*初始化*/
renderWithHotReload(Getrouter);
/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        // const getRouter = require('./router/router');
        renderWithHotReload(Getrouter);
    });
}
// ReactDom.render(
//     getRouter(),
//     document.getElementById('app')
// );

function renderWithHotReload (RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Getrouter/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}


