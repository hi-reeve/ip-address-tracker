import React, { RefObject } from "react";

import IconArrow from "@/assets/images/icon-arrow.svg";
import {
    HeroButton,
    HeroButtonIcon,
    HeroContainer,
    HeroInfoLabel,
    HeroInfoWrapper,
    HeroInfo,
    HeroInfoContent,
    HeroInput,
    HeroInputWrapper,
    HeroTitle,
} from "./HeroElement";
import { GeoLocation } from "@/types/GeoLocation";

type Props = {
    inputRef: RefObject<HTMLInputElement>;
    onSubmit: () => void;
    infoTracker: GeoLocation | null;
};
const Hero: React.FC<Props> = props => {
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") props.onSubmit();
    };
    return (
        <>
            <HeroContainer>
                <HeroTitle>IP Address Tracker</HeroTitle>
                <HeroInputWrapper>
                    <HeroInput
                        type="text"
                        placeholder="Search for any IP address or domain"
                        ref={props.inputRef}
                        onKeyPress={handleKeyPress}
                    />
                    <HeroButton onClick={props.onSubmit}>
                        <HeroButtonIcon src={IconArrow} />
                    </HeroButton>
                </HeroInputWrapper>

                <HeroInfoWrapper>
                    <HeroInfo>
                        <HeroInfoLabel>Ip address</HeroInfoLabel>
                        <HeroInfoContent>
                            {props.infoTracker
                                ? props.infoTracker.ip
                                : "Loading..."}
                        </HeroInfoContent>
                    </HeroInfo>
                    <HeroInfo>
                        <HeroInfoLabel>Location</HeroInfoLabel>
                        <HeroInfoContent>
                            {props.infoTracker
                                ? `${props.infoTracker.location.city}, ${props.infoTracker.location.country} ${props.infoTracker.location.postalCode}`
                                : "Loading..."}
                        </HeroInfoContent>
                    </HeroInfo>
                    <HeroInfo>
                        <HeroInfoLabel>Timezone</HeroInfoLabel>
                        <HeroInfoContent>
                            {props.infoTracker
                                ? `UTC ${props.infoTracker.location.timezone}`
                                : "Loading..."}
                        </HeroInfoContent>
                    </HeroInfo>
                    <HeroInfo>
                        <HeroInfoLabel>ISP</HeroInfoLabel>
                        <HeroInfoContent>
                            {props.infoTracker
                                ? props.infoTracker.isp
                                : "Loading..."}
                        </HeroInfoContent>
                    </HeroInfo>
                </HeroInfoWrapper>
            </HeroContainer>
        </>
    );
};

export default Hero;
