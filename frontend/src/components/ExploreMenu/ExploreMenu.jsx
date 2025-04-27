import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1 className='mt-20 text-3xl text-center bg-amber-300 font-bold'>Explore Our Menu</h1>
            <p className='explore-menu=text'>Rolls, sandwiches, noodles, pasta — all freshly made and packed with flavor.
                Quick bites, big cravings — Tomato has you covered!</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu