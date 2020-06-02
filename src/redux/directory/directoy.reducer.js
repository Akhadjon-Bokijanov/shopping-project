const INITIAL_STATE = {
    section: [
    {
        title: "Hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        link: "shop/hats"
    },
    {
        title: "Jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        link: 'shop/jackets'
    },
    {
        title: "Sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        link: 'shop/sneakers'
    },
    {
        title: "Women",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        link: 'shop/women'
    },
    {
        title: "Mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        link: 'shop/mens'
    }
]};

const directoryReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        default: 
            return state;
    }
}

export default directoryReducer;

