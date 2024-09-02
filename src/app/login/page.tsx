import React, { Suspense } from 'react';
import Header from "../components/headercomp/Header";
import ActivationRedirect from "../components/logincomps/LoginActivationRedirect";

export default function LoginPage() {
    return (
        <main>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <ActivationRedirect />
            </Suspense>
        </main>
    );
}
