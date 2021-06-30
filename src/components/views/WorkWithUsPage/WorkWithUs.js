import React from 'react'
import { PageHeader } from '../containers/PageHeader'
import { MainFooter } from '../MainFooter'
import './WorkWithUs.css'

import workwithus1 from '../../../assets/images/work_with_us_1.jpeg'
import workwithus2 from '../../../assets/images/work_with_us_2.jpeg'
import workwithus3 from '../../../assets/images/work_with_us_3.jpeg'
import workwithus4 from '../../../assets/images/work_with_us_4.jpeg'
import workwithus5 from '../../../assets/images/work_with_us_5.jpeg'
import workwithus6 from '../../../assets/images/work_with_us_6.jpeg'

export class WorkWithUs extends React.Component {
    constructor() {
        super()
        this.headerData = {
            title: 'Work with us',
            menuNavs: {
                group: {
                    title: 'Home',
                    url: '',               
                },
                current: {
                    title: 'Work with us',
                    url: 'workwithus',
                },
            },
        }
    }

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <PageHeader data={this.headerData} />
                
                <div className='background'>
                    <img src={workwithus2} alt="workwithus2" className="img_bottom"/><hr className="dotted"></hr>
                    <img src={workwithus3} alt="workwithus3" className="img_bottom" /><hr className="dotted"></hr><br/><br/><br/>
                    <img src={workwithus4} alt="workwithus4" className="img_bottom" /><hr className="dotted"></hr>
                    <img src={workwithus5} alt="workwithus5" className="img_bottom" /><hr className="dotted"></hr>
                    <img src={workwithus6} alt="workwithus6" className="img_bottom" />

                </div>
                <MainFooter />
            </div>
        )
    }
}
