import React from 'react';

import myPhoto from './images/Cat.jpg' // !

export default function MyPersonalPage(props) {

    let { name, surname, lastname, phone, gmail, city, workExperience, skills, photo } = props.myInfo;
    let myPhotoStyles = { height: '90%',
                          width: '90%',
                          borderRadius: '10px',
                          maxWidth: '400px'
    };

    return (
        <>
            <div className="userInfo">
                <p>{name} {surname} {lastname}</p>
                <p><img style={myPhotoStyles} src={myPhoto} alt="myPhoto" /></p>
               
            </div>

            <div className="skills"><span>Skills:</span>
                {
                    skills.map(skill => <div>{skill}</div>)
                }
            <p><span>Work experience:</span> {workExperience}</p>
            </div>

            <div className="contacts">
                <p><span>City:</span> {city}</p>
                <p><span>Phone:</span> {phone}</p>
                <p><span>Gmail:</span> {gmail}</p>
            </div>
            <br/>
        </>
    )
}