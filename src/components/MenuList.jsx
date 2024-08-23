import { useState, useEffect } from "react";
import axios from 'axios';

const MenuList = () => {
    const [menu, setMenu] = useState({});

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('../JsonData/Menu.json');
                const results = response.data; 

                setMenu(() => {
                    const menuObject = {};
                    results.forEach((categoryObject) => {
                        const categoryName = Object.keys(categoryObject)[0];
                        menuObject[categoryName] = categoryObject[categoryName];
                    });
                    return menuObject;
                }); 
                // console.log(menu);
            } catch (error) {
                console.error("error: ", error);
            }
        };

        fetchMenu(); 
    }, []); 

    return (
        <ul className="menu_list_wrapper">
            {Object.keys(menu).map((category, index) => (
                <li key={index} className="menu_list">
                    <h1>{category}</h1>

                    <div className="menu_item_wrapper">
                        <ul>
                            {menu[category].map((item, itemIndex) => (
                                <li key={itemIndex} className="menu_item">
                                    {item}
                                    
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MenuList;