import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as VIcon} from '../../assets/v-icon.svg';
import {ReactComponent as LocationIcon} from '../../assets/location-ico.svg';
import {ReactComponent as DepartmentIcon} from '../../assets/department-icon.svg';

import './index.scss';

const Jobs = () => {
    const history = useHistory();
    const [openJobs, setOpenJobs] = useState([]);
    const [openPositionId, setOpenPositionId] = useState();

    useEffect(async () => {
        const getJobs = async () => {
            try {
                const {data} = await axios.get('/users/jobs');

                if (data?.jobs) {
                    setOpenJobs(data.jobs);
                }
            } catch (err) {
                console.error('Error fetching open positions', err);
            }
        };

        getJobs();
    }, [])

    const onClickLogout = () => {
        Cookies.remove('_user_session');
        history.push('/login');
    }

    const onClickOpenPosition = (positionId) => {
        if (openPositionId === positionId) {
            setOpenPositionId(undefined);
        } else {
            setOpenPositionId(positionId);
        }
    }

    const renderPosition = (position) => {
        return (
            <div className="position-container">
                <div className="position" key={position.id}>
                    <div className="position__details">
                        <div className="position__details__name">
                            <span className="name">{position.name}</span>
                            <div className={`v-icon ${openPositionId === position.id ? 'opened' : ''}`}>
                                <VIcon onClick={() => onClickOpenPosition(position.id)}/>
                            </div>
                        </div>
                        <div className="position__details__general">
                            <div className="location">
                                <LocationIcon/>
                                {position.location}
                            </div>
                            <div className="department">
                                <DepartmentIcon/>
                                {position.department}
                            </div>
                        </div>
                    </div>
                    <a href={position.applyUrl} target="_blank" className="position__apply-btn">Apply</a>
                </div>
                {openPositionId === position.id && <div className="position-info-container">
                    <span>{position.description}</span>
                    <span>Requirements:</span>
                    <ul>
                        {position.requirements.map((requirement, id) => <li key={`req-${id}`}>{requirement}</li>)}
                    </ul>
                </div>}
            </div>
        )
    }

    return (
        <>
            <div className="navbar">
                <Logo className="logo"/>
                <button className="logout-btn" onClick={onClickLogout}>Log out</button>
            </div>
            <div className="jobs">
                {openJobs.map(position => renderPosition(position))}
            </div>
        </>
    )
}

export default Jobs;