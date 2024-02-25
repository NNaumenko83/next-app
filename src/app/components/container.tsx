import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

function Container({ children }: ContainerProps) {
    return <div className="sm:container flex justify-center">{children}</div>
}

export default Container
