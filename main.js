const { createElement, render, Component } = preact;
const h = createElement;

var currentTheme = 'light';

const renderPage = (els) => {
    return render(els, document.querySelector('#render'))
}

const pushPageContent = (content) => {
    switch (content) {
        case 'landing':
            let pushStr = h('div', {id: '~'},
                h('div', {class: 'header'},
                    h('span', {}, h('img', {src: 'cdn/images/lua_lang.png'}), 'getElementData'),
                    h('span', {id: 'shared'}, 'Shared function')
                ),
                h('div', {class: 'desc'},
                    h('span', {}, 'This function retrieves element data attached to an element under a certain key.')
                ),

                h('div', {class: 'syntax'},
                    h('span', {}, 'Syntax'),
                    h('pre', {}, 
                        h('code', {class: 'lua'}, 'var getElementData ( element theElement, string key [, bool inherit = true] )')
                    )
                )
            )
            return pushStr;
        default:
            break;
    }
}

const highlightCodes = () => {
    document.querySelectorAll('pre code').forEach(
        (block) => {
            hljs.highlightBlock(block);
        }
    );
}

const switchTheme = theme => {
    document.querySelector('html').dataset.theme = `theme-${theme}`;
}

const changeTheme = () => {
    let newTheme = currentTheme == 'light' ? 'dark' : 'light';
    currentTheme = newTheme;
    document.getElementById('slider').checked = currentTheme == 'dark' ? true : false;
    switchTheme(newTheme);
}
