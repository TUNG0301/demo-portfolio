import React from 'react'
import Title from './Title'
import { InnerLayout } from '../styles/Layout'
import styled from 'styled-components'
import SmallTiTle from './SmallTiTle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem'

function Resume() {
    const work = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={"Resume"} span={"Resume"} />
            <InnerLayout>
                 <div className='small-title'>
                    <SmallTiTle icon={work} title={"Working experience"} />  
                 </div>

                 <div className="resume-content" >
                     <ResumeItem year={'2015-2019'} title={'High School'} subTitle={'MAI University'} text={''} />
                     <ResumeItem year={'2019-2020'} title={'Pre-University'} subTitle={'VietNam University'} text={'aaaa'} />
                     <ResumeItem year={'2020-Present'} title={'InfoCommunication Technology'} subTitle={'MAI University'} text={'bbbbbb'} />
                 </div>
                 
                 <div>
                    <SmallTiTle icon={school} title={"Education"} />
                 </div>
                 <div className="resume-content u-small-title-margin" >
                     <ResumeItem year={'2015-2019'} title={'High School'} subTitle={'MAI University'} text={''} />
                     <ResumeItem year={'2019-2020'} title={'Pre-University'} subTitle={'VietNam University'} text={'aaaa'} />
                     <ResumeItem year={'2020-Present'} title={'InfoCommunication Technology'} subTitle={'MAI University'} text={'bbbbbb'} />
                 </div>
                
            </InnerLayout>
        </ResumeStyled>
        
    )
}

const ResumeStyled = styled.section`
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .small-title{
        padding-bottom: 2rem;
    }
    .resume-content{
        border-left: 1px solid var(--border-color)
    }
`

export default Resume
