import React from 'react';
import './form.css'
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';
import Contact from './Contact';
import { useState } from 'react';


function Form(props) {
    const { contactDetails,
        setContactDetails,
        socialLinks,
        setSocialLinks,
        setFullName,
        fullName,
        position,
        setPosition,
        company,
        setCompany,
        about,
        setAbout,
        description,
        setDescription,
        socialTitle,
        setSocialTitle,
        socialDesc,
        setSocialDesc,
        handleFileChange,
        handleSubmit,

    } = props

    const [showContact, setShowContact] = useState(false);
    const [showSocialLinks, setShowSocialLinks] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'fullName') {
            setFullName(value);
        } else if (name === 'position') {
            setPosition(value);
        }
        else if (name === 'company') {
            setCompany(value)
        }
        else if (name === 'about') {
            setAbout(value)
        }
        else if (name === 'description') {
            setDescription(value)
        }
    };

    return (
        <div className='formDesign' >
            <div className="container2" style={{ backgroundColor: 'white' }}>
                <form action="" method="post" encType='multipart/form-data'>
                    <h2>Digital Business Cards</h2>
                    <div className="content">
                        <div className="box-content">
                            <label htmlFor="fullname">FullName</label>
                            <input value={fullName}
                                onChange={handleInputChange} type="text" name='fullName' placeholder="Enter your FullName" ></input>
                        </div>
                        <div className="box-content">
                            <label htmlFor="fullname">Position</label>
                            <input value={position} onChange={handleInputChange} name='position' type="text" placeholder="Enter Username" required></input>
                        </div>
                        <div className="box-content">
                            <label htmlFor="fullname">Company</label>
                            <input type="text" value={company} onChange={handleInputChange} name="company" placeholder="Enter your Email" required></input>
                        </div>
                    </div>
                    <div className='upload'>
                        <label htmlFor="image">Insert your photo.</label> 
                        <br />
                        <input id='image' name="image" type="file" onChange={handleFileChange} />
                    </div>
                    <div className='about'>
                        <div>
                            <h1>About</h1>
                        </div>
                        <div className="social-link">
                            <label htmlFor="fullname">Title</label>
                            <input value={about} onChange={handleInputChange} type="Text" name="about" placeholder="Enter your Title" ></input>
                        </div>
                        <div className="social-link">
                            <label htmlFor="fullname">Description</label>
                            <textarea value={description} onChange={handleInputChange} rows="5" cols="85" type="Textfield" className='outline-none shadow-xl p-5' name="description" placeholder="Description" ></textarea>
                        </div>
                    </div>
                    <div className='contactHeading'>
                        <h1>Contact Details</h1>
                        <div className='addContact' onClick={() => setShowContact(!showContact)}><FontAwesomeIcon className='addIcon' icon={faSquarePlus}/></div>
                    </div>
                    {showContact && (
                        <Contact contactDetails={contactDetails} setContactDetails={setContactDetails} />
                    )}
                    <div className='contactHeading' style={{marginBottom:20}}>
                        <h1>Social Links</h1>
                        <div onClick={() => setShowSocialLinks(!showSocialLinks)}><FontAwesomeIcon  className='addIcon' icon={faSquarePlus}/></div>
                    </div>
                    {showSocialLinks && (
                        <SocialLinks
                            socialLinks={socialLinks}
                            setSocialLinks={setSocialLinks}
                            socialTitle={socialTitle}
                            setSocialTitle={setSocialTitle}
                            socialDesc={socialDesc}
                            setSocialDesc={setSocialDesc}
                        />
                    )}
                    <div className="button-container text-center">
                        <button
                        onClick={handleSubmit}
                        type="button"
                        className="rounded-md bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >Create card</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;