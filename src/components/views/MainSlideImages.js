import React from 'react'
import './MainSlideImages.css'
import imgBoxYellowSide from '../../assets/images/img_box_yellow_side.png'
import imgBoxWhite from '../../assets/images/img_box_white.png'

export class MainSlideImages extends React.Component {
    render() {
        return (
            <section className="section-slide-images">
                <div className="section-slide-images-container">
                    <img src={imgBoxWhite} alt="" />
                    <img src={imgBoxYellowSide} alt="" />
                </div>
                <div className="section-slide-images-content">
                    <h2 className="section-slide-images-heading">
                        TOlindo
                        <br />
                        <span>E-Bikes & Cargo Boxes</span>
                    </h2>
                    <p className="section-slide-images-text">
                        We are offering to customers and business owners unique
                        customized equipment to deliver goods in neat conditions
                        and faster than ever. <br /> Our e-bikes have winter
                        tires, long durability lithium batteries, isolated
                        boxes, and experienced bikers
                        <br />
                        <br />
                        TOlindo Cargo Boxes are thermo-insulated to protect
                        goods from extreme temperatures in winter or summer,
                        this rigid structure boxes avoid special goods like
                        flowers or even cakes from suffering during the
                        transportation process.
                    </p>
                </div>
            </section>
        )
    }
}
