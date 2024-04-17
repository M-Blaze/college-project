import React from 'react';

import ContactDetails from "../components/ContactDetails";
import About from "../components/About";
import SocialDetails from '../components/SocialDetails';
import Form from '../components/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Info2 from '../components/Info2';


import './home.css'
function CreateCard() {
    const [fullName, setFullName] = useState('')
    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [socialTitle, setSocialTitle] = useState('Social Links')
    const [socialDesc, setSocialDesc] = useState('Description')
    const [about, setAbout] = useState('About')
    const [description, setDescription] = useState('')

    const [contactDetails, setContactDetails] = useState([
        { Contact: { Label: '', Number: '' } },
        { Email: { Label: '', EmailAddress: '' } },
        { Address: { Label: '', City: '', Country: '', State: '', Zipcode: '' } },
    ]);
    const [socialLinks, setSocialLinks] = useState([
        { type: 'Facebook', url: '', title: 'Facebook', subtitle: 'Follow us on Facebook' }
    ])

    const navigate = useNavigate()

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const handleSubmit = async (event) => {
        if (!userInfo) {
            event.preventDefault();
            navigate('/login')
        }
        else {
            event.preventDefault();
            try {
                const user = userInfo.data._id; // Get the user ID from your authentication mechanism
                const data = {
                    user,
                    fullName,
                    position,
                    company,
                    socialTitle,
                    socialDesc,
                    about,
                    description,
                    contactDetails,
                    socialLinks,
                    selectedFile,
                };
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }

                await axios.post('/createDigicard', data,config);
                navigate('/dashboard')
            } catch (error) {
                console.error('Error saving profile:', error);
            }
        }

    };



    useEffect(() => {
    }, [contactDetails, socialLinks, fullName, position, userInfo]);

    return (
        <>
            <Navbar></Navbar>
            <div className='uiDesign'>
                <div className='form-wrap'>
                    <Form
                        position={position}
                        setPosition={setPosition}
                        fullName={fullName}
                        setFullName={setFullName}
                        setSelectedFile={setSelectedFile}
                        handleFileChange={handleFileChange}
                        about={about}
                        setAbout={setAbout}
                        description={description}
                        setDescription={setDescription}
                        contactDetails={contactDetails}
                        setContactDetails={setContactDetails}
                        socialLinks={socialLinks}
                        setSocialLinks={setSocialLinks}
                        company={company}
                        setCompany={setCompany}
                        socialTitle={socialTitle}
                        setSocialTitle={setSocialTitle}
                        socialDesc={socialDesc}
                        setSocialDesc={setSocialDesc}
                        handleSubmit={handleSubmit}
                    />
                </div>
                <div className='cardDesign text-white'>
                    <Info2 selectedFile={selectedFile} position={position} fullName={fullName} company={company} />
                    <div className="container px-4 pb-4">
                        <About about={about} description={description} />
                        <ContactDetails contactDetails={contactDetails} />
                        <SocialDetails socialTitle={socialTitle} socialDesc={socialDesc} socialLinks={socialLinks} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default CreateCard;