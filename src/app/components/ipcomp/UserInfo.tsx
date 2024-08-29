'use client';
import { useEffect, useState } from 'react';

interface UserInfoState {
    ip: string;
    userAgent: string;
    country: string;
}

export default function UserInfo() {
    const [userInfo, setUserInfo] = useState<UserInfoState>({
        ip: '',
        userAgent: '',
        country: '',
    });

    useEffect(() => {
        async function fetchUserInfo() {
            try {
                // Fetching IP address from an external API
                const ipResponse = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipResponse.json();

                // Getting the user-agent from the browser
                const userAgent = navigator.userAgent;

                // Fetching the country based on the IP address
                const geoResponse = await fetch(
                    `https://ipapi.co/${ipData.ip}/json/`
                );
                const geoData = await geoResponse.json();
                const country = geoData.country_name || 'Unknown';

                setUserInfo({
                    ip: ipData.ip,
                    userAgent,
                    country,
                });
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        }

        fetchUserInfo();
    }, []);

    return (
        <div className='mt-24'>
            <p>IP Address: {userInfo.ip}</p>
            <p>Device Info: {userInfo.userAgent}</p>
            <p>Country: {userInfo.country}</p>
        </div>
    );
}
