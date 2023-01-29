import React from 'react'
import styled from 'styled-components';

const Contact = () => {
    const Wrapper = styled.section`
        h2{
            text-align: center;
            margin: 3rem 0;
        }
        iframe{
            border: none;
        }
        
        .flex{
            align-items: center;
        }
    `
    return (
        <React.Fragment>
            <Wrapper>
                <h2>Feel Free To Contact Us</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246662.12302726367!2d74.55201083977477!3d14.987393444026068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbec408a8201599%3A0xa27a0094459d4b4a!2sKarnataka%20581359!5e0!3m2!1sen!2sin!4v1674956867117!5m2!1sen!2sin" width="100%" height="350"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="container">
                    <div className="contact-form">
                        <form action="https://formspree.io/f/xlekgbzj" className='flex f-col' method="post">
                            <input type="text" name="Username" placeholder='User Name' autoComplete='off' required/>
                            <input type="email" name="email" placeholder='email' autoComplete='off' required />
                            <textarea placeholder='write your message here' name="message" autoComplete='off' required cols="30" rows="10"></textarea>
                            <input type="submit" value='Send'/>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    );
}

export default Contact
