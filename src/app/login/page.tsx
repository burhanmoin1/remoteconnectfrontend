import { Suspense } from 'react';
import ActivationRedirect from "../components/logincomps/LoginActivationRedirect";
import TestTwoHeader from '../components/headercomp/Testtwoheader';
import LoginComp from '../components/logincomps/LoginComp';
import UserAccountLogin from '../components/logincomps/ClientLogin';
import CheckPasswordComp from '../components/logincomps/ClientLogin';
import SessionCheckerForLogin from '../components/sessionchecker/SessionCheckerForLogin';

export default function LoginPage() {
    return (
        <main>
            <TestTwoHeader />
            <SessionCheckerForLogin />
        </main>
    );
}
