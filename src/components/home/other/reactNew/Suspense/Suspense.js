import React, { Suspense } from 'react'

import { unstable_createResource as createResource } from 'react-cache'
// 注意会报错 https://stackoverflow.com/questions/54254925/react-cannot-ready-property-readcontext-of-undefined

const getName = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Morgan')
    }, 1000)
})

const resource = createResource(getName)


const Greeting = () => <div>hello {resource.read()}</div>

const SuspenseDemo = () => (
    <Suspense fallback={<div>loading...</div>}>
        <Greeting />
    </Suspense>
)

export default SuspenseDemo
