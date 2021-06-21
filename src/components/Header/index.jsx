import React from 'react';

import icon from '../../assets/agness.png';
import { HeaderLogo, HeaderButton } from './HeaderComponents';

const HeaderComponent = () => {
    return (
        <header className={'flex-col bg-blue-burple py-10'}>
            <div
                className={
                    'ScrollReveal flex justify-evenly items-center p-5 h-full'
                }
            >
                <HeaderLogo
                    image={icon}
                    imageAlt="agness logo"
                    text="Agness"
                />
                <div className={'ScrollReveal flex flex-col'}>
                    <strong
                        className={'text-4xl text-white font-extrabold mb-5'}
                    >
                        Agness
                    </strong>
                    <p
                        className={
                            'ScrollReveal font-secundary_text font-bold max-w-md text-base text-white'
                        }
                    >
                        Bot of reacion roles, fully customizable embeds, tags,
                        welcomes and leaves
                    </p>
                    <div className={'mt-5 flex space-x-4'}>
                        <HeaderButton
                            toLink={
                                'https://discord.com/oauth2/authorize?client_id=798573830645874718&permissions=8&scope=bot'
                            }
                            text="Invite me to your server"
                            color="white"
                        ></HeaderButton>
                        <HeaderButton
                            toLink="https://discord.gg/K63NqEDm86"
                            text="Join the support server"
                            color="black"
                        ></HeaderButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
