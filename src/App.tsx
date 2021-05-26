import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    MapConsumer,
} from "react-leaflet";
import IconLocation from "@/assets/images/icon-location.svg";
import L from "leaflet";
import { GeoLocation } from "./types/GeoLocation";
import PlaceholderLoading from "./components/PlaceholderLoading";

function App() {
    const apiKey: string = import.meta.env.VITE_IPIFY_API_KEY;
    const apiUrl: string = `https://geo.ipify.org/api/v1?apiKey=${apiKey}`;
    const iconMarker: L.Icon<L.IconOptions> = L.icon({
        iconUrl: IconLocation,
        iconSize: L.point(46, 56),
    });

    const inputRef = useRef<HTMLInputElement>(null);
    const [infoTracker, setInfoTracker] = useState<GeoLocation | null>(null);
    const validateIp = (ip: string) => {
        const ipRegex =
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (ipRegex.test(ip)) return true;

        return false;
    };
    const handleMapMove = (map: L.Map) => {
        if (infoTracker) {
            map.setView([infoTracker.location.lat, infoTracker.location.lng]);
        }
    };
    const handleSubmit = () => {
        if (inputRef.current && !inputRef.current.value) return;

        if (inputRef.current) {
            initFirstIP(inputRef.current.value);
        }
    };
    const initFirstIP = async (ip?: string) => {
        let searchedIp = ip;
        if (!searchedIp) {
            const currentIpResponse = await fetch(
                "https://api.ipify.org/?format=json"
            );

            const { ip: currentIp } = await currentIpResponse.json();

            searchedIp = currentIp;
        }
        if (searchedIp) {
            const isIpAddress = validateIp(searchedIp);
            const myInfoTrackerResponse = await fetch(
                `${apiUrl}&${
                    isIpAddress ? "ipAddress=" : "domain="
                }${searchedIp.trim()}`
            );

            if (myInfoTrackerResponse.ok) {
                const myInfoTracker: GeoLocation =
                    await myInfoTrackerResponse.json();

                setInfoTracker(myInfoTracker);
            }
        }
    };
    useEffect(() => {
        initFirstIP();
    }, []);
    return (
        <div className="App">
            <Hero
                inputRef={inputRef}
                onSubmit={handleSubmit}
                infoTracker={infoTracker}
            />

            {infoTracker && (
                <MapContainer
                    center={[
                        infoTracker.location.lat,
                        infoTracker.location.lng,
                    ]}
                    zoom={14}
                    scrollWheelZoom={false}
                    zoomControl={false}
                >
                    <MapConsumer>
                        {map => {
                            handleMapMove(map);
                            return null;
                        }}
                    </MapConsumer>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={[
                            infoTracker.location.lat,
                            infoTracker.location.lng,
                        ]}
                        icon={iconMarker}
                    >
                        <Popup>
                            {infoTracker.location.city},{" "}
                            {infoTracker.location.country}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
            {!infoTracker && <PlaceholderLoading />}
        </div>
    );
}

export default App;
