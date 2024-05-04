import React, { useRef } from 'react'
import { toPng, toBlob } from 'html-to-image';
import { Link, Trash2, Download } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { QRCodeSVG } from 'qrcode.react';

import VisitingCard from './VisitingCard';
import Image from './Image';
import Text from './Text';
import { useNavigate } from 'react-router-dom';

const notify = () => {
    toast('Image coplied to clipboard')
};

const CardInDashboard = ({ cardData, deleteCard }) => {
    const navigate = useNavigate()
    const cardRef = useRef(null)
    const getElementComponent = (element) => {
        if (element.isQr) {
            const fullNameElement = cardData.cardElements.find(item => item.contentType === 'full name')
            const phoneElement = cardData.cardElements.find(item => item.contentType === 'phone')
            const [firstName, lastName] = fullNameElement.content.split(' ')
            const phone = phoneElement.content
            const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:${firstName} ${lastName}\nTEL;TYPE=WORK,VOICE:${phone}\nREV:2024-05-04T11:06:33.503Z\nEND:VCARD`

            return (
                <div key={element.id} className="qr-code absolute" style={element.styles}>
                    <QRCodeSVG id="qr-svg" value={vCard} width="100%" height="100%" />
                </div>
            )
        }
        if (element.type === 'image') {
            return <Image key={element.id} imageData={element} />
        }

    
        return <Text key={element.id} textData={element} />
    }

    const copyToClipboard = () => {
        toBlob(cardRef.current).then(async function (blob) {
            try {
                await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
                notify()
            } catch (error) {
                console.error(error);
            }
          });
    }

    const saveImage = (cardId) => {
        toPng(cardRef.current).then(function (dataUrl) {
            let link = document.createElement('a');

            link.download = `${cardId}.png`;
            link.href = dataUrl;
            link.click();
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
    }

    return (
        <div className='card px-2 mb-4 relative group overflow-hidden' key={cardData._id} >
            <div className="card-content-wrap" ref={cardRef}>
                <VisitingCard clickHandler={() => navigate(`/card/${cardData._id}`)} style={cardData.cardStyles}>
                    { cardData.cardElements.map(element => getElementComponent(element)) }
                </VisitingCard>
            </div>
            <div className="card-options absolute left-0 bottom-0 right-0 z-20 px-2 translate-y-full group-hover:translate-y-0 transition-transform">
                <ul className="options list flex h-16">
                    <li className='w-1/3 flex h-full items-center justify-center cursor-pointer text-white bg-gray-600 bg-opacity-80 transition-all hover:bg-opacity-100' onClick={copyToClipboard}>
                        <Link className='mr-2' /> Share
                    </li>
                    <li className='w-1/3 flex h-full items-center justify-center cursor-pointer text-white bg-gray-600 bg-opacity-80 transition-all hover:bg-opacity-100' onClick={() => saveImage(cardData._id)}>
                        <Download className='mr-2' /> Save
                    </li>
                    <li className='w-1/3 flex h-full items-center justify-center cursor-pointer text-white bg-gray-600 bg-opacity-80 transition-all hover:bg-opacity-100' onClick={deleteCard}>
                        <Trash2 className='mr-2' /> Delete
                    </li>
                </ul>
            </div>
            <Toaster />
        </div>
    )
}

export default CardInDashboard