import React from 'react';
import Handlebars from 'handlebars';

const templateSource = 
`
    <ul class="menu_list">
        {{#each menu}}
            <li class="menu_item">
                {{this}}

                <span class="material-symbols-outlined add_symbol">
                    add
                </span>
            </li>
        {{/each}}
    </ul>
`;

const compiledTemplate = Handlebars.compile(templateSource);

const MenuList = ({ menuItems }) => {
    const html = compiledTemplate({ menu: menuItems });
    return (
        <div>
            <h1>Menu</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

export default MenuList;