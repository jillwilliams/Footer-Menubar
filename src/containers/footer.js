import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/icons';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketing</Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                        <Footer.Link href="#">Design</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#">
                            United States
                        </Footer.Link>
                        <Footer.Link href="#">
                            United Kingdom
                        </Footer.Link>
                        <Footer.Link href="#">Australia</Footer.Link>
                        <Footer.Link href="#">Support</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://www.facebook.com">
                            <Icon className="fab fa-facebook-f" />
                                Facebook
                        </Footer.Link>
                        <Footer.Link href="https://www.instagram.com">
                            <Icon className="fab fa-instagram" />
                                Instagram
                        </Footer.Link>
                        <Footer.Link href="https://www.youtube.com">
                            <Icon className="fab fa-youtube" />
                                YouTube
                        </Footer.Link>
                        <Footer.Link href="https://www.twitter.com">
                            <Icon className="fab fa-twitter" />
                                Twitter
                        </Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
}