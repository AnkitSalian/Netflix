import React from 'react';
import { Footer } from '../components';
import footerData from '../fixtures/footer.json';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Call 000-000-000-0000</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                {
                    footerData.map(columnElem => (
                        <Footer.Column>
                            {
                                columnElem.map(linkElem => (
                                    <Footer.Link href="#" onMouseOver={onMouseEnter} onMouseLeave={onMouseLeaving} >{linkElem}</Footer.Link>
                                ))
                            }
                        </Footer.Column>
                    ))
                }
            </Footer.Row>

            <Footer.Break />

            <Footer.Select>
                <Footer.Option key="eng">English</Footer.Option>
                <Footer.Option key="hindi">हिन्दी</Footer.Option>
            </Footer.Select>

            <Footer.Text>Netflix India</Footer.Text>
        </Footer>
    )
}

function onMouseEnter(e) {
    e.target.style.textDecoration = 'underline';
}

function onMouseLeaving(e) {
    e.target.style.textDecoration = 'none';
}