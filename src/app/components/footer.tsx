import React from 'react'
import Container from './container'

type FooterProps = {}

function Footer({}: FooterProps) {
    return (
        <footer className="py-2 bg-slate-900 text-gray-50 ">
            <Container>
                <div className="w-full flex justify-center">
                    <p>Footer</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
