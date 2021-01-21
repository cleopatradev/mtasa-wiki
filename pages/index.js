renderPage(
    h('div', {id: 'render-page'},
        h('div', {class: 'nav'},
            h('div', {class: 'brand'},
                h('img', {src: 'cdn/images/mta100px.png'})
            ),
            h('div', {class: 'links'},
                h('a', {class: 'lnk', href: '#'}, 'Home', h('i', {class: 'fas fa-home'})),
                h('div', {class: 'dropdown'},
                    h('span', {}, 'Getting Started',
                        h('i', {class: 'fas fa-caret-down'})
                    ),
                    h('a', {href: '#'}, 'Creating a server'),
                    h('a', {href: '#'}, 'Learning Lua')
                ),
                h('div', {class: 'dropdown'},
                    h('span', {}, 'Client',
                        h('i', {class: 'fas fa-code'})
                    ),
                    h('a', {href: '#'}, 'Client Functions'),
                    h('a', {href: '#'}, 'Client Events')
                ),
            )
        ),
        h('div', {class: 'page'},
            h('div', {class: 'search'},
                h('div', {class: 'input-group'},
                    h('input', {placeholder: 'Search'}),
                    h('i', {class: 'fas fa-search'})
                ),
                h('div', {class: 'theme'},
                    h('label', {class: 'switch', id: 'switch'},
                        h('input', {type: 'checkbox', id: 'slider', onChange: () => { changeTheme() }}),
                        h('span', {}, h('i', {class: 'fas fa-palette'}))
                    )
                )
            ),
            h('div', {class: 'page-content'},
                h('div', {class: 'page-tree'},
                    h('a', {href: '#'}, 'Home'),
                    h('a', {href: '#'}, 'getElementData')
                ),
                h('div', {class: 'page-render'},
                    pushPageContent('landing')
                )
            )
        )
    )
)
changeTheme()
highlightCodes()