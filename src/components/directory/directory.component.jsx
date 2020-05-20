import React from 'react';
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component"

class Directory extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            section: [
                {
                    title: "Hats",
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    id: 1,
                    link: "hats"
                },
                {
                    title: "Jackets",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    id: 2,
                    link: ''
                },
                {
                    title: "Sneakers",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id: 3,
                    link: ''
                },
                {
                    title: "Women",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    size: "large",
                    id: 4,
                    link: ''
                },
                {
                    title: "Mens",
                    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                    size: "large",
                    id: 5
                }
            ]
        }
    }

    render()
    {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map( ({id,   ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;